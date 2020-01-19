<template>
  <v-row class="mx-1 mx-sm-4 mx-md-0" justify="center">
    <v-col class="pa-0" cols="0" md="1" lg="2"></v-col>
    <v-col class="pa-0">
      <v-card width="100%">
        <v-row class="mx-1">
          <v-col class="pa-1" cols="12" sm="4" md="3" lg="2">
            <v-img
              v-if="image"
              contain
              height="100%"
              aspect-ratio="1.7778"
              :src="image.src"
              :lazy-src="image.placeholder"
            />
          </v-col>
          <v-col class="ma-1">
            <p>
              <span v-if="authors">{{ authors }}</span>
              <span v-if="pub.TITLE">"{{ pub.TITLE }}",</span>
              <span v-if="pub.BOOKTITLE" class="booktitle"
                >in {{ pub.BOOKTITLE }},</span
              >
              <span v-if="pub.PUBLISHER" class="publisher"
                >{{ pub.PUBLISHER }},</span
              >
              <span v-if="pub.JOURNAL" class="journal">{{ pub.JOURNAL }},</span>
              <span v-if="pub.YEAR">{{ pub.YEAR }}</span>
            </p>
            <p>
              <v-btn v-if="type" outlined class="ma-1 pubType" tile small>{{
                type
              }}</v-btn>
              <v-dialog
                v-model="dialog"
                width="500"
                @keydown.esc="dialog = false"
              >
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" class="ma-1" small>
                    <v-icon>format_quote</v-icon>
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title primary-title>
                    Bibtex
                  </v-card-title>
                  <v-card-text>
                    <div>{{ bibtexHeader }}</div>
                    <div style="margin-left: 20px;">
                      <div
                        v-for="(entry, i) in bibtexContent"
                        :key="i"
                        class="d-flex"
                        style
                      >
                        <span>{{ entry[0].toLowerCase() }}:&nbsp;</span
                        ><span>{{ entry[1] }}</span>
                      </div>
                    </div>
                    <div>}</div>
                  </v-card-text>
                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="orange" text @click="dialog = false">
                      Done
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-btn
                v-if="pub.DOI"
                :href="'https://doi.org/' + pub.DOI"
                class="ma-1"
                target="_blank"
                small
                >DOI</v-btn
              >
              <v-btn
                v-if="pub.URL"
                :href="pub.URL"
                class="ma-1"
                target="_blank"
                small
                color="blue darken-3"
              >
                <v-icon class="mr-1">mdi-file-pdf</v-icon>
                PDF
              </v-btn>
              <v-btn
                v-if="youtube"
                :href="youtube"
                class="ma-1"
                target="_blank"
                small
                color="red darken-3"
              >
                <v-icon class="mr-1">mdi-youtube</v-icon>
                Youtube
              </v-btn>
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col class="pa-0" cols="0" md="1" lg="2"></v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    bibtex: {
      type: Object,
      required: true
    },
    image: {
      type: Object
    },
    youtube: {
      type: String
    }
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    pub: function() {
      return this.bibtex;
    },
    bibtexContent: function() {
      let entries = Object.entries(this.pub);
      let filtered = entries.filter(d => {
        return !d[0].startsWith("BIBTEX");
      });
      let edited = filtered.map((d, i) => [d[0], "{" + d[1] + "},"]);
      edited[edited.length - 1][1] = edited[edited.length - 1][1].slice(0, -1);
      return edited;
    },
    bibtexHeader: function() {
      return this.pub.BIBTEXTYPEKEY.toLowerCase() + "{" + this.pub.BIBTEXKEY;
    },
    type: function() {
      switch (this.bibtex.BIBTEXTYPEKEY) {
        case "@ARTICLE":
          return "Journal Article";
        case "@BOOK":
          return "Book";
        case "@INCOLLECTION":
          return "Book Chapter";
        case "@INPROCEEDINGS":
          return "Conference Paper";
        case "@REVISION":
          return "Under Revision";
        default:
          return "Unknown";
      }
    },
    authors: function() {
      // change names from Bolte, Fabian to F. Bolte
      let authors = this.bibtex.AUTHOR.split(" and ");
      let authorString = "";
      let count = 1;
      for (let author of authors) {
        let parts = author.split(" ");
        parts[0] = parts[0].slice(0, -1); // remove comma
        // add first and middle names
        for (let i = 1; i < parts.length; i++)
          authorString += parts[i][0] + ". ";
        // add last name
        authorString += parts[0];
        // concatenate author names
        authorString += ", ";
        if (count == authors.length - 1) authorString += " and ";
        count++;
      }
      return authorString;
    }
  }
};
</script>

<style scoped>
.journal,
.booktitle {
  font-style: italic;
}

.v-btn.pubType {
  pointer-events: none;
  opacity: 70%;
  /* background-color: white !important;
  color: green; */
}
</style>
