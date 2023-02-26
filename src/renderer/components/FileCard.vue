<template>
  <div class="FileCard">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>文件基本信息</span>
          <el-button class="button" text>可操作按钮</el-button>
        </div>
      </template>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="文件/文件夹路径" label-align="center" align="left" label-class-name="my-label" class-name="my-content" width="150px">F:/study/com/test/test/com/software/test3</el-descriptions-item>
        <el-descriptions-item label="文件个数" label-align="center" align="left" label-class-name="my-label" class-name="my-content" width="150px">1</el-descriptions-item>
        <el-descriptions-item label="用户列选取" label-align="center" align="left" label-class-name="my-label" class-name="my-content" width="150px">
          <el-select v-model="formInline.region" placeholder="用户id">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-descriptions-item>
        <el-descriptions-item label="日期列选取" label-align="center" align="left" label-class-name="my-label" class-name="my-content" width="150px">
          <el-select v-model="formInline.region" placeholder="日期列">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-descriptions-item>
        <el-descriptions-item label="金额列选取" label-align="center" align="left" label-class-name="my-label" class-name="my-content" width="150px">
          <el-select v-model="formInline.region" placeholder="金额列">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const formInline = reactive({
  region: '',
})
</script>

<style>
.FileCard .el-card__body {
  padding: 0;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

</style>
