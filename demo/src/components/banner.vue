<template>
    <div>
       <el-upload
          action=""
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
       </el-upload>
       <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
       </el-dialog>
       <button class="submit" @click="submitfile">提交</button>
    </div>
</template>
<script>
 export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitfile() {
        // var file = new FormData();
        // file.append('filename', this.upath);// filename是键，file是值，就是要传的文件，test.zip是要传的文件名
        // console.log(file.get('filename'))
        // let config = { headers: { 'Content-Type': 'multipart/form-data' } };
        // this.$http.post('api/emergency/import', file, config).then(
        //   (res) => {
        //     // this.userData = res.data.data
        //     // this.loadData()
        //   }
        // )
        console.log(this.dialogImageUrl)
      }
    }
  }
</script>

