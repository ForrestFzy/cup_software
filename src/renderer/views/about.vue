<template>
  <div class="about">
    <el-card style="height: 100%;">
      <div class="about_left">
        <el-image style="width: 300px; height: 300px" :src="url" :fit="fit" />
        <h1>EUS电力用户分析系统</h1>
        <h4>version:1.0.0</h4>
        <h4>email:forfziy@163.com</h4>
        <h4>info:软件杯</h4>
      </div>

      <div class="about_right">
        <p style="line-height: 200%;text-indent:2em;text-align: left;font-weight: bold;width: 80%;">
          “EUS电力用户分析系统”结合了数据挖掘与深度学习技术，针对电力用户缴费信息、电力营销和电力调度等问题，给出多种合适的解决方案。
        </p>
        <p style="line-height: 200%;text-indent:2em;text-align: left;font-weight: bold;width: 80%;">
          本系统数据集由开发组向爱尔兰的Commission for Energy Regulation申请使用家庭用电负荷数据集。该数据集一共有7000户用户的1亿5千万多条数据。除此以外，我们还搜寻了更多的与电力消耗有关的数据，如天气，风力，湿度等数据，根据日期将其汇总。训练数据高达4G。

        </p>
        <p style="line-height: 200%;text-indent:2em;text-align: left;font-weight: bold;width: 80%;">
          在电力负荷预测任务中，开发组采用多步滑动窗口的LSTM模型，并对网络结构做出改进，以更加适合电力负荷数据集，该模型的训练周期长达2天。模型在每20万条数据的MSE仅为80左右。
        </p>
        <p style="line-height: 200%;text-indent:2em;text-align: left;font-weight: bold;width: 80%;">
          在用户集群划分任务中，开发组首先对所有数据集进行预处理，以期望在数据集中寻找某种模式，然后采用包含DBSCAN在内的多种聚类方法对用户进行集群划分，并针对每类用户的特征做出可视化分析，以便实现企业定点营销。
        </p>
      </div>

    </el-card>
  </div>

</template>

<script setup>
const url = "http://fcode.ltd/EUS.ico"
</script>

<style>
.about {
  height: 100%;
}
.about .el-card__body {
  height: 90%;
}
.about_left {
  width: 40%;
  height: 100%;
  float: left;
  text-align: center;
  margin-top: 6%;
}
.about_right {
  width: 50%;
  height: 100%;
  float: right;
  text-align: center;
  margin-top: 6%;
}
</style>
