<template>
<base-section :sectionTitle="'Contact me'" :id="'contact'">
  <div class="wrapper">
    <image-hero :imageSrc="require('../../assets/questions.svg')" :imageAlt="'A customer asking questions'" :reverse="true" :hideOnMobile="true">
      <template v-slot:text>
        <h3>Still have <span class="app-text">Questions</span>? Send me a <span class="app-text">message</span>!</h3>
        <form action="">
          <fieldset>
            <legend><label for="email">Email</label></legend>
            <input type="email" id="email" placeholder="example@email.com">
          </fieldset>

          <fieldset>
            <legend><label for="subject">Subject</label></legend>
            <input type="subject" id="subject" placeholder="Subject">
          </fieldset>

          <fieldset>
            <legend><label for="message">Message</label></legend>
            <textarea id="message" placeholder="Your Message"></textarea>
          </fieldset>

          <p>⚠️ This form does not work yet. Write me an <base-link :href="'mailto:dimitri.kaiser@lanig-kaiser.com'">email</base-link> instead</p>

          <button class="form-send-button">Send</button>
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
