<template>
  <div>
    <el-menu :default-active="activedata" class="el-menu-demo" mode="horizontal">
      <el-sub-menu index="1" show-timeout="0" style="margin-left: 8px">
        <template #title>文件</template>
        <el-upload action="#" :auto-upload="false" :file-list="fileupload.fileList" accept=".*" :limit="1" :on-change="filehandleChange">
          <el-menu-item index="1-1">
            <el-button type="text" class="menu-button">导入文件...</el-button>
          </el-menu-item>
        </el-upload>
        <el-upload class="upload-demo" multiple action="#" :auto-upload="false" :file-list="dirupload.fileList" accept=".*" :limit="100" :on-change="dirhandleChange">
          <el-menu-item index="1-2">导入新文件夹</el-menu-item>
        </el-upload>

        <el-sub-menu index="1-3">
          <template #title>最近文件</template>
          <el-menu-item v-for="(i, index) in form.data" :key="index">{{
            i
          }}</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="1-4">
          <el-button type="text" @click="quit1" class="menu-button">回到主界面</el-button>
        </el-menu-item>

        <el-menu-item index="1-5">
          <el-button type="text" @click="quit2" class="menu-button">退出登录</el-button>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="2" show-timeout="0">
        <template #title>工作台</template>
        <el-menu-item index="2-1">
          <el-button type="text" @click="dataDia" class="menu-button">数据预览</el-button>
        </el-menu-item>
        <el-menu-item index="2-2">
          <el-button type="text" @click="session1Dia" class="menu-button">用户习惯</el-button>
        </el-menu-item>
        <el-menu-item index="2-3">
          <el-button type="text" @click="session2Dia" class="menu-button">用户归类</el-button>
        </el-menu-item>
        <el-menu-item index="2-4">
          <el-button type="text" @click="session3Dia" class="menu-button">用户价值</el-button>
        </el-menu-item>
        <el-menu-item index="2-5">
          <el-button type="text" @click="session4Dia" class="menu-button">负荷预测</el-button>
        </el-menu-item>
        <el-menu-item index="2-6">
          <el-button type="text" @click="session5Dia" class="menu-button">集群划分</el-button>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="3" show-timeout="0">
        <template #title>帮助</template>
        <el-menu-item index="3-1">
          <el-button type="text" @click="toWebsite" class="menu-button">官方网站</el-button>
        </el-menu-item>
        <el-menu-item index="3-2">
          <el-button type="text" @click="toGuide" class="menu-button">操作指南</el-button>
        </el-menu-item>
        <el-menu-item index="3-3" @click="toVideo">视频介绍</el-menu-item>
        <!-- <el-menu-item index="3-4">
          <el-button type="text" @click="toPro" class="menu-button">工作进度</el-button>
        </el-menu-item> -->
      </el-sub-menu>

      <el-sub-menu index="4" show-timeout="0">
        <template #title>关于</template>
        <el-menu-item index="4-1">
          <el-button type="text" @click="toAbout" class="menu-button">软件说明</el-button>
        </el-menu-item>
        <el-menu-item index="4-2">
          <el-button type="text" @click="toMess" class="menu-button">反馈留言</el-button>
        </el-menu-item>
        <el-menu-item index="4-3">
          <el-button type="text" @click="toUpdate" class="menu-button">软件更新</el-button>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>

    <!-- 这是任务一选择各项参数的的对话框 -->
    <el-dialog v-model="session1.session1Visiable" title="用户习惯分析" width="30%" :before-close="handleClose">
      <el-tooltip content="如果选择的文件夹，将会在此步合并" placement="right" effect="light">
        <el-icon>
          <svg t="1655708068861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2153" width="64" height="64">
            <path d="M514.048 54.272q95.232 0 178.688 36.352t145.92 98.304 98.304 145.408 35.84 178.688-35.84 178.176-98.304 145.408-145.92 98.304-178.688 35.84-178.176-35.84-145.408-98.304-98.304-145.408-35.84-178.176 35.84-178.688 98.304-145.408 145.408-98.304 178.176-36.352zM515.072 826.368q26.624 0 44.544-17.92t17.92-43.52q0-26.624-17.92-44.544t-44.544-17.92-44.544 17.92-17.92 44.544q0 25.6 17.92 43.52t44.544 17.92zM567.296 574.464q-1.024-16.384 20.48-34.816t48.128-40.96 49.152-50.688 24.576-65.024q2.048-39.936-8.192-74.752t-33.792-59.904-60.928-39.936-87.552-14.848q-62.464 0-103.936 22.016t-67.072 53.248-35.84 64.512-9.216 55.808q1.024 26.624 16.896 38.912t34.304 12.8 33.792-10.24 15.36-31.232q0-12.288 7.68-30.208t20.992-34.304 32.256-27.648 42.496-11.264q46.08 0 73.728 23.04t25.6 57.856q0 17.408-10.24 32.256t-26.112 28.672-33.792 27.648-33.792 28.672-26.624 32.256-11.776 37.888l1.024 38.912q0 15.36 14.336 29.184t37.888 14.848q23.552-1.024 37.376-15.36t12.8-32.768l0-24.576z" p-id="2154" fill="#1296db"></path>
          </svg>
        </el-icon>
      </el-tooltip>
      <el-form :model="session1" label-width="120px">
      <el-form-item label="文件选取">
          <el-upload :file-list="session1.fileList" accept=".*" :limit="1" :on-change="session1FileChange">
            <template #trigger>
              <el-button type="primary" style="width: 180px;">请选择文件</el-button>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="用户选择">
          <el-select v-model="session1.u_name" placeholder="用户ID">
            <el-option v-for="col in session1.Tcolumns" :key="col.prop" :label="col.label" :value="col.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="日期选择">
          <el-select v-model="session1.u_date" placeholder="日期">
            <el-option v-for="col in session1.Tcolumns" :key="col.prop" :label="col.label" :value="col.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="金额选择">
          <el-select v-model="session1.u_money" placeholder="金额">
            <el-option v-for="col in session1.Tcolumns" :key="col.prop" :label="col.label" :value="col.label" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="session1.session1Visiable = false">取消</el-button>
          <el-button type="primary" @click="session1Confirm">确认</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 这是任务二选择各项参数的的对话框 -->
    <el-dialog v-model="session2.session2Visiable" title="用户归类" width="40%" :before-close="handleClose">
      <el-form :model="session2" label-width="150px">
        <el-form-item label="文件选取">
          <el-upload :file-list="session2.fileupload.fileList" accept=".*" :limit="1" :on-change="session2FileChange">
            <template #trigger>
              <el-button type="primary" style="width: 180px;">请选择将要归类的文件</el-button>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="用户选择">
          <el-select v-model="session2.u_name" placeholder="用户ID">
            <el-option v-for="col in session2.Tcolumns" :key="col.prop" :label="col.label" :value="col.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="平均缴费次数选择">
          <el-select v-model="session2.u_count" placeholder="次数">
            <el-option v-for="col in session2.Tcolumns" :key="col.prop" :label="col.label" :value="col.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="平均缴费金额选择">
          <el-select v-model="session2.u_money" placeholder="金额">
            <el-option v-for="col in session2.Tcolumns" :key="col.prop" :label="col.label" :value="col.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="平均缴费次数">
          <el-input-number v-model="session2.num1" :precision="2" :step="0.1" :max="100000" />
          <el-tooltip content="参数为“用户习惯”界面计算得来的，如果不准确，请更改" placement="right" effect="light">
            <el-icon>
              <svg t="1655708068861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2153" width="64" height="64">
                <path d="M514.048 54.272q95.232 0 178.688 36.352t145.92 98.304 98.304 145.408 35.84 178.688-35.84 178.176-98.304 145.408-145.92 98.304-178.688 35.84-178.176-35.84-145.408-98.304-98.304-145.408-35.84-178.176 35.84-178.688 98.304-145.408 145.408-98.304 178.176-36.352zM515.072 826.368q26.624 0 44.544-17.92t17.92-43.52q0-26.624-17.92-44.544t-44.544-17.92-44.544 17.92-17.92 44.544q0 25.6 17.92 43.52t44.544 17.92zM567.296 574.464q-1.024-16.384 20.48-34.816t48.128-40.96 49.152-50.688 24.576-65.024q2.048-39.936-8.192-74.752t-33.792-59.904-60.928-39.936-87.552-14.848q-62.464 0-103.936 22.016t-67.072 53.248-35.84 64.512-9.216 55.808q1.024 26.624 16.896 38.912t34.304 12.8 33.792-10.24 15.36-31.232q0-12.288 7.68-30.208t20.992-34.304 32.256-27.648 42.496-11.264q46.08 0 73.728 23.04t25.6 57.856q0 17.408-10.24 32.256t-26.112 28.672-33.792 27.648-33.792 28.672-26.624 32.256-11.776 37.888l1.024 38.912q0 15.36 14.336 29.184t37.888 14.848q23.552-1.024 37.376-15.36t12.8-32.768l0-24.576z" p-id="2154" fill="#1296db"></path>
              </svg>
            </el-icon>
          </el-tooltip>
        </el-form-item>
        <el-form-item label="平均缴费金额">
          <el-input-number v-model="session2.num2" :precision="2" :step="0.1" :max="100000" />
          <el-tooltip content="参数为“用户习惯”界面计算得来的，如果不准确，请更改" placement="right" effect="light">
            <el-icon>
              <svg t="1655708068861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2153" width="64" height="64">
                <path d="M514.048 54.272q95.232 0 178.688 36.352t145.92 98.304 98.304 145.408 35.84 178.688-35.84 178.176-98.304 145.408-145.92 98.304-178.688 35.84-178.176-35.84-145.408-98.304-98.304-145.408-35.84-178.176 35.84-178.688 98.304-145.408 145.408-98.304 178.176-36.352zM515.072 826.368q26.624 0 44.544-17.92t17.92-43.52q0-26.624-17.92-44.544t-44.544-17.92-44.544 17.92-17.92 44.544q0 25.6 17.92 43.52t44.544 17.92zM567.296 574.464q-1.024-16.384 20.48-34.816t48.128-40.96 49.152-50.688 24.576-65.024q2.048-39.936-8.192-74.752t-33.792-59.904-60.928-39.936-87.552-14.848q-62.464 0-103.936 22.016t-67.072 53.248-35.84 64.512-9.216 55.808q1.024 26.624 16.896 38.912t34.304 12.8 33.792-10.24 15.36-31.232q0-12.288 7.68-30.208t20.992-34.304 32.256-27.648 42.496-11.264q46.08 0 73.728 23.04t25.6 57.856q0 17.408-10.24 32.256t-26.112 28.672-33.792 27.648-33.792 28.672-26.624 32.256-11.776 37.888l1.024 38.912q0 15.36 14.336 29.184t37.888 14.848q23.552-1.024 37.376-15.36t12.8-32.768l0-24.576z" p-id="2154" fill="#1296db"></path>
              </svg>
            </el-icon>
          </el-tooltip>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="session2.session2Visiable = false">取消</el-button>
          <el-button type="primary" @click="session2Confirm">确认</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 这是任务三选择各项参数的的对话框 -->
    <el-dialog v-model="session3.session3Visiable" title="用户高价值预测" width="80%" :before-close="handleClose">
      <el-form :model="session3" label-width="120px">
        <el-form-item label="文件选取">
          <el-upload :file-list="session3.fileupload.fileList" accept=".*" :limit="1" :on-change="session3FileChange">
            <template #trigger>
              <el-button type="primary" style="width: 180px;">请选择将要预测的文件</el-button>
            </template>
          </el-upload>
        </el-form-item>
        <!-- 预测方法的选取 -->
        <el-form-item label="预测方法">
          <el-select v-model="session3.func" placeholder="选择预测方法">
            <el-option label="高斯朴素贝叶斯" value="gauss">高斯朴素贝叶斯 <span>
                <el-tag size="small" round type='success'>推荐</el-tag>
              </span> </el-option>
            <el-option label="决策树" value="decisionTree" />
            <el-option label="支持向量机" value="svm" />
          </el-select>
        </el-form-item>
        <el-form-item label="自变量选取">
          <el-checkbox-group v-model="session3.checkList">
            <el-checkbox v-for="col in session3.columns" :key="col.prop" :label="col.label" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="因变量选取">
          <el-radio-group v-model="session3.target">
            <el-radio v-for="col in session3.columns" :key="col.prop" :label="col.label" />
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <span style="font-size:16px;">参数选取</span>
          <el-tooltip content="以下参数默认均为最优参数(可不用更改)" placement="right" effect="light">
            <el-icon>
              <svg t="1655708068861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2153" width="64" height="64">
                <path d="M514.048 54.272q95.232 0 178.688 36.352t145.92 98.304 98.304 145.408 35.84 178.688-35.84 178.176-98.304 145.408-145.92 98.304-178.688 35.84-178.176-35.84-145.408-98.304-98.304-145.408-35.84-178.176 35.84-178.688 98.304-145.408 145.408-98.304 178.176-36.352zM515.072 826.368q26.624 0 44.544-17.92t17.92-43.52q0-26.624-17.92-44.544t-44.544-17.92-44.544 17.92-17.92 44.544q0 25.6 17.92 43.52t44.544 17.92zM567.296 574.464q-1.024-16.384 20.48-34.816t48.128-40.96 49.152-50.688 24.576-65.024q2.048-39.936-8.192-74.752t-33.792-59.904-60.928-39.936-87.552-14.848q-62.464 0-103.936 22.016t-67.072 53.248-35.84 64.512-9.216 55.808q1.024 26.624 16.896 38.912t34.304 12.8 33.792-10.24 15.36-31.232q0-12.288 7.68-30.208t20.992-34.304 32.256-27.648 42.496-11.264q46.08 0 73.728 23.04t25.6 57.856q0 17.408-10.24 32.256t-26.112 28.672-33.792 27.648-33.792 28.672-26.624 32.256-11.776 37.888l1.024 38.912q0 15.36 14.336 29.184t37.888 14.848q23.552-1.024 37.376-15.36t12.8-32.768l0-24.576z" p-id="2154" fill="#1296db"></path>
              </svg>
            </el-icon>
          </el-tooltip>
        </el-form-item>
        <!-- 贝叶斯参数的选取 -->
        <el-form-item label="参数选取" v-show="session3.func == 'gauss'">
          <span style="font-size:16px;">无参数</span>
        </el-form-item>
        <!-- 决策树参数的选取 -->
        <div v-show="session3.func == 'decisionTree'">
          <el-row>
            <el-col :span="8">
              <el-form-item label="准则">
                <el-select v-model="session3.DT.criterion" placeholder="准则">
                  <el-option label="基尼指数" value="gini" />
                  <el-option label="信息熵" value="entropy" />
                  <el-option label="对数损失" value="log_loss" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="分离器">
                <el-select v-model="session3.DT.splitter" placeholder="分离器">
                  <el-option label="最好" value="best" />
                  <el-option label="随机" value="random" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="最大深度">
                <el-input-number v-model="session3.DT.max_depth" :step="1" />
              </el-form-item>
            </el-col>

          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="复杂度参数">
                <el-input-number v-model="session3.DT.ccp_alpha" :step="0.1" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <!-- 支持向量机参数的选取(包含两个一个核，一个最大迭代次数) -->
        <div v-show="session3.func == 'svm'">
          <el-row>
            <el-col :span="8">
              <el-form-item label="内核">
                <el-select v-model="session3.SVM.kernel" placeholder="请选择内核">
                  <el-option label="linear" value="linear" />
                  <el-option label="poly" value="poly" />
                  <el-option label="rbf" value="rbf" />
                  <el-option label="sigmoid" value="sigmoid" />
                  <el-option label="precomputed" value="precomputed" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="最大迭代次数">
                <el-input-number v-model="session3.SVM.max_iter" :step="1" />
              </el-form-item>
            </el-col>
            <el-col :span="8"> </el-col>
          </el-row>
        </div>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="session3.session3Visiable = false">取消</el-button>
          <el-button type="primary" @click="session3Confirm">确认</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 这是任务四选择各项参数的的对话框 -->
    <el-dialog v-model="session4.session4Visiable" title="负荷预测" width="80%" :before-close="handleClose">
      <el-form :model="session4" label-width="120px">
        <!-- 预测方法的选取 -->
        <el-form-item label="选择文件">
          <el-upload action="#" :file-list="session4.dirupload.fileList" accept=".*" :limit="100" :on-change="session4DirChange">
            <template #trigger>
              <el-button type="primary" style="width: 180px;">请选择电力负荷文件夹</el-button>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="时间列选取">
          <el-select v-model="session4.date_col" placeholder="时间列选取">
            <el-option v-for="col in session4.Tcolumns" :key="col.prop" :label="col.label" :value="col.label" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="负荷列选取">
          <el-select v-model="session4.target" placeholder="因变量选取">
            <el-option v-for="col in session4.Tcolumns" :key="col.prop" :label="col.label" :value="col.label" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="session4.session4Visiable = false">取消</el-button>
          <el-button type="primary" @click="session4Confirm">确认</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 这是任务5选择各项参数的的对话框 -->
    <el-dialog v-model="session5.session5Visiable" title="用户集群" width="80%" :before-close="handleClose">
      <el-form :model="session5" label-width="120px">
        <el-form-item label="文件选取">
          <el-upload action="#" :auto-upload="false" :file-list="session5.fileupload.fileList" accept=".*" :limit="1" :on-change="session5FileChange">
            <template #trigger>
              <el-button type="primary" style="width: 180px;">请选择用户信息文件</el-button>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="方法">
          <el-select v-model="session5.func" placeholder="选择聚类方法">
            <el-option label="密度快速聚类方法" value="DBSCAN" />
            <el-option label="质量优先聚类算法" value="brich" />
          </el-select>
        </el-form-item>
        <el-form-item label="临界缺失率">
          <el-tooltip content="当属性缺失率达到该值时，该属性将会被删除" placement="right" effect="light">
            <el-icon>
              <svg t="1655708068861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2153" width="64" height="64">
                <path d="M514.048 54.272q95.232 0 178.688 36.352t145.92 98.304 98.304 145.408 35.84 178.688-35.84 178.176-98.304 145.408-145.92 98.304-178.688 35.84-178.176-35.84-145.408-98.304-98.304-145.408-35.84-178.176 35.84-178.688 98.304-145.408 145.408-98.304 178.176-36.352zM515.072 826.368q26.624 0 44.544-17.92t17.92-43.52q0-26.624-17.92-44.544t-44.544-17.92-44.544 17.92-17.92 44.544q0 25.6 17.92 43.52t44.544 17.92zM567.296 574.464q-1.024-16.384 20.48-34.816t48.128-40.96 49.152-50.688 24.576-65.024q2.048-39.936-8.192-74.752t-33.792-59.904-60.928-39.936-87.552-14.848q-62.464 0-103.936 22.016t-67.072 53.248-35.84 64.512-9.216 55.808q1.024 26.624 16.896 38.912t34.304 12.8 33.792-10.24 15.36-31.232q0-12.288 7.68-30.208t20.992-34.304 32.256-27.648 42.496-11.264q46.08 0 73.728 23.04t25.6 57.856q0 17.408-10.24 32.256t-26.112 28.672-33.792 27.648-33.792 28.672-26.624 32.256-11.776 37.888l1.024 38.912q0 15.36 14.336 29.184t37.888 14.848q23.552-1.024 37.376-15.36t12.8-32.768l0-24.576z" p-id="2154" fill="#1296db"></path>
              </svg>
            </el-icon>
          </el-tooltip>
          <el-input-number v-model="session5.percent" :step="0.1" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="session5.session5Visiable = false">取消</el-button>
          <el-button type="primary" @click="session5Confirm">确认</el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import DecisionTree from './components/DTparams.vue'
import bus from '../../views/public.js'
// import { nextTick } from 'process'
const { shell } = require('electron')
const router = useRouter()
const { proxy } = getCurrentInstance()

const activedata = reactive('data')

// 选择文件夹
nextTick(() => {
  document.getElementsByClassName('el-upload__input')[1].webkitdirectory = true
})
// *****************************这里是任务5的方法与变量定义 ********************
const session5 = reactive({
  session5Visiable: false,
  Tcolumns: [],
  filepath: '',
  percent: 0.5,
  fileupload: {
    fileList: [],
  },
  func: "",
})
const session5Confirm = () => {
  localStorage.setItem('percent', session5.percent)
  localStorage.setItem('func5', session5.func)
  session5.session5Visiable = false
  bus.emit('session5Loading', true)
  if (router.currentRoute._value.path === '/session5') {
    router.go(0)
  } else {
    router.push('/session5')
  }
}
const session5Dia = () => {
  session5.session5Visiable = true
}
const session5FileChange = (file, fileList) => {
  localStorage.setItem('session5FilePath', file.raw.path)
}

// ********** 文件上传的变量和函数方法等定义部分
const fileupload = reactive({
  name: '',
  fileList: [],
})
// 文件选中后调用的函数
// 上传的函数
const filehandleChange = (file, fileList) => {
  localStorage.setItem('session1FilePath', file.raw.path)
  localStorage.setItem('sessionType', 'file')
  if (router.currentRoute._value.path === '/data') {
    router.go(0)
  } else {
    router.push('/data')
  }
}
// **********

// ********** 文件夹上传的变量和函数方法等定义部分
const dirupload = reactive({
  name: '',
  fileList: [],
})
// 选中文件夹打开的函数
const dirhandleChange = (file, fileList) => {
  localStorage.setItem('session1DirPath', file.raw.path)
  localStorage.setItem('sessionType', 'dir')
  if (router.currentRoute._value.path === '/data') {
    router.go(0)
  } else {
    router.push('/data')
  }
}

// 打开数据预览的方法
const dataDia = () => {
  router.push('/data')
}

// *******************任务一的内容***********************
const session1 = reactive({
  session1Visiable: false,
  Tcolumns: [],
  u_name: '',
  u_date: '',
  u_money: '',
  fileList: "",
})
var fileName = localStorage.getItem('session1FilePath')
proxy.$axios
  .post('http://127.0.0.1:5000/getFileContent', {
    filename: fileName,
  })
  .then(function (res) {
    if (res.data.code === 200) {
      session1.Tcolumns = res.data.columns
    }
  })
// 打开对话框的方法
const session1Dia = () => {
  session1.session1Visiable = true
}
const session1Confirm = () => {
  localStorage.setItem('u_name', session1.u_name)
  localStorage.setItem('u_date', session1.u_date)
  localStorage.setItem('u_money', session1.u_money)
  if (router.currentRoute._value.path === '/session1') {
    router.go(0)
  } else {
    router.push('/session1')
  }
  session1.session1Visiable = false
}
const session1FileChange = (file, fileList) => {
  localStorage.setItem('session2FilePath', file.raw.path)
}
// ********************任务一结束******************************
// ********************任务二的部分****************************
const session2 = reactive({
  session2Visiable: false,
  func: '',
  fileupload: {
    fileList: [],
  },
  Tcolumns: [],
  u_name: '',
  u_count: '',
  u_money: '',
  num1: localStorage.getItem('avg_count'),
  num2: localStorage.getItem('avg_money'),
})

const session2FileChange = (file, fileList) => {
  localStorage.setItem('session2FilePath', file.raw.path)
  proxy.$axios
    .post('http://127.0.0.1:5000/getFileContent', {
      filename: file.raw.path,
    })
    .then(function (res) {
      if (res.data.code === 200) {
        session2.Tcolumns = res.data.columns
      }
    })
}
// 打开对话框的方法
const session2Dia = () => {
  session2.session2Visiable = true
}
const session2Confirm = () => {
  localStorage.setItem('u_name', session2.u_name)
  localStorage.setItem('u_count', session2.u_count)
  localStorage.setItem('u_money', session2.u_money)
  localStorage.setItem('avg_count', session2.num1)
  localStorage.setItem('avg_money', session2.num2)
  if (router.currentRoute._value.path === '/session2') {
    router.go(0)
  } else {
    router.push('/session2')
  }
  session2.session2Visiable = false
}
// ********************任务二结束******************************
// ********************任务三的部分***************************
const session3 = reactive({
  columns: [],
  session3Visiable: false,
  func: '',
  checkList: [],
  target: '',
  fileupload: {
    fileList: [],
  },
  DT: {
    criterion: 'gini',
    splitter: 'best',
    max_depth: 5,
    min_samples_split: 2,
    min_samples_leaf: 1,
    min_weight_fraction_leaf: 0.0,
    max_feature: 'auto',
    min_impurity_decrease: 0.0,
    ccp_alpha: 0.0,
  },
  SVM: {
    kernel: 'rbf',
    max_iter: -1,
  },
})
const session3FileChange = (file, fileList) => {
  localStorage.setItem('session3FilePath', file.raw.path)
  proxy.$axios
    .post('http://127.0.0.1:5000/getFileContent', {
      filename: file.raw.path,
    })
    .then(function (res) {
      if (res.data.code === 200) {
        session3.columns = res.data.columns
      }
    })
}

// 打开对话框的方法
const session3Dia = () => {
  session3.session3Visiable = true
}
const session3Confirm = () => {
  localStorage.setItem('session3Func', session3.func)
  localStorage.setItem('x_cols', session3.checkList)
  localStorage.setItem('y_col', session3.target)
  localStorage.setItem('criterion', session3.DT.criterion)
  localStorage.setItem('splitter', session3.DT.splitter)
  localStorage.setItem('max_depth', session3.DT.max_depth)
  localStorage.setItem('kernel', session3.SVM.kernel)
  localStorage.setItem('max_iter', session3.SVM.max_iter)
  session3.session3Visiable = false
  if (router.currentRoute._value.path === '/session3') {
    router.go(0)
  } else {
    router.push('/session3')
  }
}
var fileName = localStorage.getItem('currentFile')

// ********************任务三结束*****************************
const session4Dia = () => {
  session4.session4Visiable = true
  if (session4.session4Visiable) {
    document.getElementsByClassName(
      'el-upload__input'
    )[0].webkitdirectory = true
  }
  nextTick(() => {
    document.getElementsByClassName(
      'el-upload__input'
    )[0].webkitdirectory = true
  })
}
// ********************任务四的部分 ***************************

const session4 = reactive({
  func: '', // 预测方法 func
  leftValue: [], // 协变量 x_cols
  date_col: '', // 日期列
  step: 0, // 步长
  target: '', // 因变量 y_col
  data: [],
  session4Visiable: false,
  Tcolumns: [],
  fileupload: {
    fileList: [],
  },
  dirupload: {
    fileList: [],
  },
})

const session4handleChange = () => {
  console.log(session4.leftValue)
}
const session4FileChange = (file, fileList) => {
  localStorage.setItem('session4currentFile', file.raw.path)
  proxy.$axios
    .post('http://127.0.0.1:5000/session4getColumns', {
      filepath: file.raw.path,
    })
    .then(function (res) {
      if (res.data.code === 200) {
        session4.data = []
        session4.Tcolumns = res.data.columns
        for (let i = 0; i < session4.Tcolumns.length; i++) {
          var tmp = { key: 1, label: 'none', disabled: false }
          tmp['key'] = i + 1
          tmp['label'] = session4.Tcolumns[i].label
          tmp['disabled'] = false
          session4.data.push(tmp)
        }
      }
    })
}
const session4DirChange = (file, fileList) => {
  nextTick(() => {
    console.log(document.getElementsByClassName('el-upload__input')[1].value)
  })
  localStorage.setItem('dirpath', file.raw.path)
  proxy.$axios
    .post('http://127.0.0.1:5000/session4getColumns', {
      dirpath: file.raw.path,
    })
    .then(function (res) {
      if (res.data.code === 200) {
        session4.data = []
        session4.Tcolumns = res.data.columns
        for (let i = 0; i < session4.Tcolumns.length; i++) {
          var tmp = { key: 1, label: 'none', disabled: false }
          tmp['key'] = i + 1
          tmp['label'] = session4.Tcolumns[i].label
          tmp['disabled'] = false
          session4.data.push(tmp)
        }
      }
    })
}
const session4Confirm = () => {
  // var filepath = localStorage.getItem('session4currentFile')
  localStorage.setItem('func4', session4.func)
  localStorage.setItem('x_cols4', session4.leftValue)
  localStorage.setItem('y_col4', session4.target)
  localStorage.setItem('step4', session4.step)
  localStorage.setItem('date_col4', session4.date_col)
  session4.session4Visiable = false
  if (router.currentRoute._value.path === '/session4') {
    router.go(0)
  } else {
    router.push('/session4')
  }
}

// *********************任务四结束******************************
// ********************本文件需要的部分*************************
const form = reactive({
  // 最近文件的列表
  data: ['test1', 'test2', 'test3'],
})

proxy.$axios.post('http://127.0.0.1:5000/getlastpath').then(function (res) {
  form.data = res.data.data
})

// 本文件需要的方法
const toAbout = () => {
  router.push('/about')
}
const toMess = () => {
  router.push('/message')
}
const toUpdate = () => {
  router.push('/update')
}
const toVideo = () => {
  shell.openExternal('http://cupweb.fcode.ltd')
}
// 跳转到官方网站的函数
const toWebsite = () => {
  shell.openExternal('http://cupweb.fcode.ltd')
}
// 跳转到操作指南的函数
const toGuide = () => {
  shell.openExternal('http://cupweb.fcode.ltd/#/help')
}
// 跳转到进度的函数
const toPro = () => {
  shell.openExternal('http://cupweb.fcode.ltd/#/about')
}
const quit1 = () => {
  router.push('/index')
}
const quit2 = () => {
  router.push('/login')
}
</script>

<style>
.el-menu-demo {
  height: 30px;
}
.el-sub-menu__title {
  font-size: 13px;
  /* font-weight: bold; */
  padding: 5px;
  font-family: 'Times', 'Deng';
}
.el-menu-item {
  font-size: 13px;
  /* font-weight: bold; */
  padding: 0px;
  font-family: 'Times', 'Deng';
}

/* 菜单栏中隐藏的按钮的样式 */
.menu-button {
  text-align: left;
  /* background-color: aqua; */
  width: 100%;
  height: 100%;
  justify-content: left;
  font-size: 13px;
  /* font-weight: bold; */
  color: black;
  font-family: 'Times', 'Deng';
}

/* 去掉菜单栏里的小箭头 */
.el-sub-menu .el-sub-menu__icon-arrow {
  width: 0;
  height: 0;
}

.el-button {
  font-family: 'Times', 'Deng';
}

/* 为对话框配置样式 */
.el-dialog__title {
  font-size: 25px;
}
.el-form-item__label {
  font-size: 17px;
}
.el-input__inner {
  font-size: 17px;
}
.el-checkbox {
  --el-checkbox-font-size: 16px;
}
.el-radio__label {
  font-size: 16px;
}


</style>
