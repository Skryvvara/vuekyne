<template>
<base-section :sectionTitle="'Contact me'" :id="'contact'">
  <div class="wrapper">
    <image-hero :imageSrc="require('../../assets/questions.svg')" :imageAlt="'A customer asking questions'" :reverse="true" :hideOnMobile="true">
      <template v-slot:text>
        <h3>Still have <span class="app-text">Questions</span>? Send me a <span class="app-text">message</span>!</h3>
        <form v-on:submit="this.sendMail">
          <fieldset>
            <legend><label for="email">Email</label></legend>
            <input v-model="form.email" required type="email" id="email" placeholder="example@email.com">
          </fieldset>

          <fieldset>
            <legend><label for="subject">Subject</label></legend>
            <input v-model="form.subject"  requiredtype="subject" id="subject" placeholder="Subject">
          </fieldset>

          <fieldset class="dont-show" aria-hidden="true">
            <legend aria-hidden="true"><label for="honey" aria-hidden="true">Honey</label></legend>
            <input aria-hidden="true" v-model="form.honey" type="text" id="honey" placeholder="don't fill">
          </fieldset>

          <fieldset>
            <legend><label for="message">Message</label></legend>
            <textarea v-model="form.message" required id="message" placeholder="Your Message"></textarea>
          </fieldset>

          <p>{{ this.form_message }}</p>

          <button class="form-send-button" type="submit">Send</button>
        </form>
      </template>
    </image-hero>
  </div>
</base-section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseSection from "../base/BaseSection.vue";
import BaseLink from "../base/BaseLink.vue";
import ImageHero from "../hero/ImageHero.vue";

export default defineComponent({
  name: "ContactSection",
  components: {
    BaseSection,
    BaseLink,
    ImageHero
  },
  data() {
    return {
      form: {
        email: '',
        subject: '',
        message: '',
        honey: ''
      },
      form_message: ''
    }
  },
  methods: {
    async sendMail(event: any) {
      event.preventDefault();

      if (this.form.honey) return;
      if (!this.form.email || !this.form.subject || !this.form.message) return;

      await this.axios.post('/api/sendmail', {
        "email": this.form.email,
        "subject": this.form.subject,
        "message": this.form.message
      }).catch((err) => console.error(err));

      this.form = {
        email: '',
        subject: '',
        message: '',
        honey: ''
      };
      this.form_message = 'Thank you for your message!';

    }
  }
});
</script>

<style scoped lang="scss">
form {
  width: 100%;
  background: var(--colour-gray-800);
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
}

.dont-show {
  display: none;
}

fieldset {
  border: 2px solid var(--colour-gray-600);
  border-radius: 2px;
  padding: 6px;

  &:last-of-type {
    margin-bottom: 10px;
  }

  input, textarea {
    width: 100%;
    color: var(--colour-gray-300);
    background: var(--colour-gray-700);
    padding: 4px;
    border: 1px solid var(--colour-gray-600);
    border-radius: 2px;

    &:focus {
      outline: none;
      border: 1px solid var(--colour-green);
    }
  }

  textarea {
    resize: none;
    height: 150px;
  }
}

legend {
  padding: 4px;
  color: var(--colour-gray-300);
  letter-spacing: 0.05ch;
}

.form-send-button {
    width: max-content;
    text-decoration: none;
    padding: 8px 10px;
    font-weight: bold;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--colour-green-100);
    background: var(--colour-green);
    border: 1px solid var(--colour-green);
    border-radius: 4px;
    cursor: pointer;

    transition: all 150ms ease-in-out;
}
.form-send-button:hover {
    background: var(--colour-green-900);
    border: 1px solid var(--colour-green-900);
}
</style>
