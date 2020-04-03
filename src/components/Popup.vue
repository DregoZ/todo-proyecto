<template>
  <v-dialog max-width="600px">
    <!-- TEMPLATE con activator para indicar el elemento que abrirá el siguiente componente -->
    <template v-slot:activator="{on}">
      <v-btn v-on="on" text class="success">New Project</v-btn>
    </template>
    <v-card>
      <v-card-title></v-card-title>
      <v-card-text>
        <v-form class="px-3" v-model="formValidation" lazy-validation ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="[rules.notEmpty, rules.title, rules.maxTitle]"
            counter="20"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="[rules.notEmpty,rules.maxContent]"
            counter="200"
          ></v-textarea>
          <v-row>
            <v-col cols="12" md="6">
              <!-- date picker -->
              <v-menu>
                <template v-slot:activator="{on}">
                  <v-text-field
                    readonly
                    :value="formatDate"
                    label="Date limit"
                    prepend-icon="mdi-calendar"
                    v-on="on"
                    :rules="[rules.notEmpty]"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="due"></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-btn
            class="success mx-0 mt-3"
            @click="newProject"
            :disabled="!formValidation"
          >Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>



<script>
/** npm install date-fns */
import format from "date-fns/format";
export default {
  data: () => ({
    formValidation: true,
    title: "",
    content: "",
    due: null,
    rules: {
      notEmpty: text => !!text || "Required",
      title: text =>
        text.length >= 3 || "Title must be 3 or more characters long",
      maxTitle: title => title.length <= 20 || "Max length 20 characters",
      maxContent: content =>
        content.length <= 200 || "Max length 200 characters"
    }
  }),

  computed: {
    //si hay una fecha especifcada, la formatea con fns, si no devuelve un string vacio
    formatDate() {
      return this.due ? format(new Date(this.due), "d MMM yyyy") : "";
    }
  },
  methods: {
    newProject() {
      if (this.$refs.form.validate())
        console.log(
          "Title: " +
            this.title +
            "\nContent: " +
            this.content +
            "\nDate limit: " +
            this.due
        );
    }
  }
};
</script>