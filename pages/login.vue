<script setup lang="ts">
  definePageMeta({
    layout: 'heading-footer',
  })

  const supabase = useSupabaseClient()
  let authprocess = ref(false)
  let Oauthprocess = ref(false)
  let errorAuth = ref(false)
  let errorText = ref()

  import type { FormError, FormSubmitEvent } from '#ui/types'

  const selectedProviders = authProviders.filter(provider => provider.active)

  const state = reactive({
    email: undefined,
    password: undefined
  })

  const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Enter your e Mail' })
    if (!state.password) errors.push({ path: 'password', message: 'Enter your Password!' })
    return errors
  }

  async function onAuthProviderClick(prvdr: any) {
    Oauthprocess.value = true
    console.log("onAuthProviderClick", prvdr)
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: prvdr,
        options: {
          redirectTo: 'https://localhost:3000/confirm',
        },
      });
    if (error) {
      errorAuth.value = true
      errorText.value = error
    } else {
      navigateTo("/")
      console.log("Login successful", data)
    }
  }

  async function onSubmit(event: FormSubmitEvent<any>) {
    // Do something with data
    authprocess.value = true
    const {data, error } = await supabase.auth.signInWithPassword({
      email: event.data.email,
      password: event.data.password,
    })
    if (error) {
      errorAuth.value = true  
      errorText.value = error
    } else {
      navigateTo("/")
      console.log("Login successful", data)
    }
    console.log(event.data)
    authprocess.value = false
  }
</script>

<template>
  <div class="flex grow justify-center items-center">
    <div data-testid="contentwrapper" class="flex flex-col min-w-96 p-6 border border-drk-600 rounded-lg space-y-6 dark:shadow-glow-dark shadow-glow-bright">
      <div>
        <h3>Login</h3>
      </div>
      <UForm :validate="validate" :state="state" class="space-y-4 relative" @submit="onSubmit">
        <UFormGroup label="Email" name="email" required>
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" required>
          <UInput v-model="state.password" type="password" />
        </UFormGroup>
        <UAlert v-if="errorAuth" color="err" class="mb-4" title="Login Error" :description="errorText?.message" />
        <Transition>
          <UButton block type="submit" class="absolute" :loading="authprocess" v-if="state.email && state.password">
          Submit
          </UButton>
        </Transition>
      </UForm>
      <UDivider label="OR" v-if="selectedProviders.length != 0"/>
      <div v-else class="py-2"></div>
      <div data-testid="authProviders" id="authProviders" class="flex justify-center space-x-2 items-center relative" v-if="selectedProviders.length != 0">
        <UAlert v-if="Oauthprocess" class="absolute w-full z-10" color="prmry" title="oAuth" description="Waiting for login redirect ..." :ui="{ rounded: 'rounded-lg' }" />
        <UButton v-for="p in selectedProviders" :icon="p.icon" @click="onAuthProviderClick(p.provider)" variant="soft" color="drk" size="xl" :ui="{ rounded: 'rounded-full' }"/>
      </div>
    </div>
  </div>
</template>