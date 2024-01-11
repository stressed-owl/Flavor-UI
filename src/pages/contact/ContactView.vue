<template>
    <div class="mt-[84px]">
        <div class="flex flex-col items-center">
            <biggest-title>Contact us</biggest-title>
            <div class="flex gap-x-[40px] mt-[72px]">
                <div>
                    <img src="@/assets/contact/contact_page_main_image.png"/>
                </div>
                <div class="flex items-center">
                    <div class="flex flex-col">
                        <div class="flex flex-wrap gap-x-[40px]">
                            <text-field name="NAME" placeholder="Enter your name..."/>
                            <text-field name="EMAIL ADDRESS" placeholder="Your email address..."/>
                        </div>
                        <div class="mt-[24px]">
                            <text-field name="SUBJECT" placeholder="Enter subject..."/>
                        </div>
                        <div>
                            <text-area />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BiggestTitle from "@/components/UI/titles/BiggestTitle.vue";
import TextField from "@/pages/contact/textField/TextField.vue";
import TextArea from "@/pages/contact/textarea/TextArea.vue";
</script>