<script>
export default {
  data() {
    return {
      value:"",
      categories: [
        { name: "Lácteos", code: "LA" },
        { name: "Verduras", code: "VE" },
        { name: "Frutas", code: "FR" },
      ],
    };
  },
};
</script>

<template>
  <form>
    <div class="card">
      <div class="field grid">
        <label class="col-3 mb-2" for="code">{{ $t("code") }}</label>
        <div class="col-7 p-0">
          <InputText id="code" />
        </div>
        <div class="col-2">
          <Button label="validar" />
        </div>
      </div>
      <div class="field grid">
        <label for="nombre" class="col-3 mb-2" >{{ $t("name") }}</label>
        <div class="9"> <InputText id="nombre" class="w-full" /></div>
      </div>
      <div class="field grid">
        <label for="Telefono" class="col-3 mb-2">{{ $t("phone") }}</label>
        <div class=9> <InputMask id="Telefono" v-model="value" mask="a9-99999a" class="w-full" /></div>
      </div>
      <div class="field grid">
        <label for="category" class="col-3 mb-2">Cetegoría*</label>
        <div class="col-9 p-0"> <pv-dropdown
          id="category"
          :options="categories"
          optionLabel="code"
          placeholder="Select a category"
          class="w-full"
        ></pv-dropdown></div>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
