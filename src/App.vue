<script>
export default {
  data() {
    return {
      cities: [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
      ]
    }
  }
}
</script>

<template>
  <form>

    <div class="card">

      <div class="field grid">
        <label class="col-2 mb-2" for="code">Codigo*</label>
        <div class="col-10">
          <InputText id="code"/>
          <Button label="validar"></Button>
        </div>
      </div>
      <div class="field grid">

        <label for="nombre">Nombre*</label>
        <InputText id="nombre"/>

      </div>

      <div class="field grid">

        <label for="Telefono">Telefono*</label>
        <InputMask id="Telefono" v-model="value" mask="a9-99999a"/>
        <div>
        </div>

        <label for="Telefono">Telefono*</label>
        <pv-dropdown :options="cities" optionLabel="code" placeholder="Select a category"></pv-dropdown>


      </div>

    </div>
  </form>

</template>

<style scoped>
</style>
