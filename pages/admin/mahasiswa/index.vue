<script setup>

import {
  mdiMonitorCellphone,
  mdiTableBorder,

  mdiTrashCan,

} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import NotificationBar from "@/components/NotificationBar.vue";

import CardBox from "@/components/CardBox.vue";

import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";




const mahasiswa = ref([]);
const loading = ref(false)
const supabase = useSupabaseClient();
const getMahasiswa = async ()=>{
  loading.value = false
    const { data, error } = await supabase
    .from('mahasiswa')
    .select()
    .order('npm', { ascending: true })
    mahasiswa.value = data
    loading.value = true
}
const deleteMahasiswa = async (id)=>{
  if(confirm('Yakin ingin menghapus data?')){

    const { data, error } = await supabase
    .from('mahasiswa')
    .delete()
    .match({ id: id })
    getMahasiswa()
  }
  else{
    alert('data tidak jadi dihapus')
  
  }
}
onMounted(()=>{
    getMahasiswa()
})

</script>

<template>
  <NuxtLayout name="authenticated">
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiAccount" main  title="Mahasiswa" >
        
        <NuxtLink to="/admin/mahasiswa/tambah" class="rounded-full my-3 bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3 md:text-lg text-md">Add Mahasiswa</NuxtLink>
      </SectionTitleLineWithButton>
   
      <CardBox class="mb-6" has-table>
        <table>
            <thead>

                <tr>
                    <th>No</th>
                    <th>Npm</th>
                    <th>Nama</th>
                    <th>Foto</th>
                    <th>Kelas</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody >
                <tr v-if="!loading">
                    <td colspan="6" class="text-center">
                        <div class="flex justify-center items-center">
                            <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                        </div>
                    </td>
                </tr>
                <tr v-for="data,i in mahasiswa" :key="data.id">

                    <td data-label="no">{{ i+1 }}</td>
                    <td data-label="npm">{{ data.npm }}</td>
                   
                    <td data-label="nama">{{ data.nama }}</td>
                    <td>
                      <img :src="data.foto" alt="" class="w-[100px] h-[130px]">
                    </td>
                    <td data-label="kelas">{{ data.kelas }}</td>
                    <td class="before:hidden lg:w-1 whitespace-nowrap ">
                      <div class="flex gap-3">

                        <NuxtLink class="py-1 px-2 rounded-md border "  :to="`/admin/mahasiswa/`+data.id" >detail</NuxtLink>
                        <BaseButtons type="justify-start lg:justify-end" no-wrap>
                              <BaseButton
                              color="danger"
                              :icon="mdiTrashCan"
                              small
                              @click="deleteMahasiswa(data.id)"
                              />
                          </BaseButtons>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
      </CardBox>

     
    </SectionMain>
  </NuxtLayout>
</template>