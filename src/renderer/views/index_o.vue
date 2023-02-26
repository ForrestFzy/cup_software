<template>
  <div class="main">
    <div class="left">
      <div class="leftContent">
        <h2 style="font-weight: normal">基本功能</h2>
        <el-button type="primary" @click="session1Dia">
          <el-icon>
            <Guide />
          </el-icon>用户缴费习惯分析
        </el-button>
        <el-button type="primary" @click="session2Dia">
          <el-icon>
            <Monitor />
          </el-icon>用户缴费行为归类
        </el-button>
        <el-button type="primary" @click="session3Dia">
          <el-icon>
            <VideoPlay />
          </el-icon>用户行为价值预测
        </el-button>
      </div>
    </div>

    <div class="right">
      <div class="rightContent">
        <h2 style="font-weight: normal">智能功能</h2>
        <el-button type="primary" @click="session4Dia">
          <el-icon>
            <svg t="1659283611240" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3823" width="128" height="128">
              <path d="M395.765333 586.570667h-171.733333c-22.421333 0-37.888-22.442667-29.909333-43.381334L364.768 95.274667A32 32 0 0 1 394.666667 74.666667h287.957333c22.72 0 38.208 23.018667 29.632 44.064l-99.36 243.882666h187.050667c27.509333 0 42.186667 32.426667 24.042666 53.098667l-458.602666 522.56c-22.293333 25.408-63.626667 3.392-54.976-29.28l85.354666-322.421333zM416.714667 138.666667L270.453333 522.581333h166.869334a32 32 0 0 1 30.933333 40.181334l-61.130667 230.954666 322.176-367.114666H565.312c-22.72 0-38.208-23.018667-29.632-44.064l99.36-243.882667H416.714667z" p-id="3824" fill="#ffffff"></path>
            </svg>
          </el-icon>电力负荷预测以及营销调度
        </el-button>
        <el-button type="primary" @click="session5Dia">
          <el-icon>
            <svg t="1659283531128" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2271" width="64" height="64">
              <path d="M626.568192 981.999616l-23.379968 0-36.857856 0.283648L68.137984 982.283264l0-23.989248c0 0-10.815488-134.006784 186.535936-168.308736 0 0 150.230016-20.28032 160.748544-61.595648 0 0 5.732352-4.596736 1.502208-52.578304-9.017344-102.161408-75.86816-150.234112-102.909952-189.293568-27.041792-39.063552-29.293568-84.13184-29.293568-84.13184 0-11.264 4.716544-15.391744 12.560384-22.626304 9.696256-8.950784 6.786048-18.4576 4.934656-28.52864-7.04512-38.23616-7.666688-99.662848-0.970752-138.138624 1.502208-45.820928 43.56608-82.625536 43.56608-82.625536 7.892992-6.695936 15.803392-14.062592 21.343232-22.898688 1.547264-2.460672 2.970624-5.09952 3.8144-7.897088 3.16928-10.548224-7.560192-18.292736-5.407744-29.51168 1.942528-10.116096 19.280896-10.61376 29.766656-11.164672 23.614464-1.243136 47.347712-2.172928 70.925312-0.366592C641.71008 72.155136 699.725824 137.1136 699.725824 137.1136c13.73696 16.449536 22.787072 36.566016 28.23168 57.184256 1.630208 6.16448 3.028992 12.45696 3.785728 18.79552 5.501952 31.602688 5.481472 64.559104 3.770368 96.494592-0.815104 15.22688-2.584576 30.215168-4.819968 45.282304-1.17248 7.8848-0.571392 15.222784 4.70016 21.523456 4.4032 5.271552 9.44128 8.95488 11.60192 15.881216 1.011712 3.238912 1.275904 6.736896 1.275904 10.112 0 0-2.255872 45.068288-29.297664 84.13184-27.041792 39.059456-93.893632 87.13216-102.905856 189.293568-4.23424 47.981568 1.502208 52.578304 1.502208 52.578304 10.514432 41.314304 160.748544 61.595648 160.748544 61.595648 199.55712 37.010432 186.53184 168.308736 186.53184 168.308736l0 23.989248-131.3792 0 20.70016-0.283648L836.49536 982.00064l-36.64384 0L626.568192 982.00064 626.568192 981.999616z" p-id="2272" fill="#ffffff"></path>
            </svg>
          </el-icon>用户集群多维特征分析
        </el-button>

        <el-button type="primary" @click="tologin" plain>
          <el-icon>
            <svg t="1655135763429" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2475" width="64" height="64">
              <path d="M874.666667 855.744a19.093333 19.093333 0 0 1-19.136 18.922667H168.469333A19.2 19.2 0 0 1 149.333333 855.530667V168.469333A19.2 19.2 0 0 1 168.469333 149.333333h687.061334c10.581333 0 19.136 8.533333 19.136 18.922667V320h42.666666V168.256A61.717333 61.717333 0 0 0 855.530667 106.666667H168.469333A61.866667 61.866667 0 0 0 106.666667 168.469333v687.061334A61.866667 61.866667 0 0 0 168.469333 917.333333h687.061334A61.76 61.76 0 0 0 917.333333 855.744V704h-42.666666v151.744zM851.84 533.333333l-131.797333 131.754667a21.141333 21.141333 0 0 0 0.213333 29.973333 21.141333 21.141333 0 0 0 29.973333 0.192l165.589334-165.589333a20.821333 20.821333 0 0 0 6.122666-14.976 21.44 21.44 0 0 0-6.314666-14.997333l-168.533334-168.533334a21.141333 21.141333 0 0 0-29.952-0.213333 21.141333 21.141333 0 0 0 0.213334 29.973333L847.296 490.666667H469.333333v42.666666h382.506667z" fill="#ffffff" p-id="2476"></path>
            </svg>
          </el-icon>退出登录
        </el-button>

      </div>
    </div>
    <!-- 这是任务一选择各项参数的的对话框 -->
    <el-dialog v-model="session1.session1Visiable" title="用户缴费习惯分析" width="30%" :before-close="handleClose">
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
      <el-button type="primary" style="margin-left: 20px;width: 200px;" @click="quickstart1">快速测试(添加文件+参数)</el-button>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="session1.session1Visiable = false">取消</el-button>
          <el-button type="primary" @click="session1Confirm">确认</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 这是任务二选择各项参数的的对话框 -->
    <el-dialog v-model="session2.session2Visiable" title="用户缴费行为归类" width="40%" :before-close="handleClose">
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
      <el-button type="primary" style="margin-left: 20px;width: 200px;" @click="quickstart2">快速测试(添加文件+参数)</el-button>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="session2.session2Visiable = false">取消</el-button>
          <el-button type="primary" @click="session2Confirm">确认</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 这是任务三选择各项参数的的对话框 -->
    <el-dialog v-model="session3.session3Visiable" title="用户行为价值预测" width="80%" :before-close="handleClose">
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
      <el-button type="primary" style="margin-left: 20px;width: 200px;" @click="quickstart3">快速测试(添加文件+参数)</el-button>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="session3.session3Visiable = false">取消</el-button>
          <el-button type="primary" @click="session3Confirm">确认</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 这是任务四选择各项参数的的对话框 -->
    <el-dialog v-model="session4.session4Visiable" title="电力负荷预测以及营销调度" width="80%" :before-close="handleClose">
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
        <!-- <el-form-item label="预测步长">
          <el-input-number v-model="session4.step" :min="1" :max="100" />
        </el-form-item> -->
      </el-form>
      <el-button type="primary" style="margin-left: 20px;width: 200px;" @click="quickstart4">快速测试(添加文件+参数)</el-button>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="session4.session4Visiable = false">取消</el-button>
          <el-button type="primary" @click="session4Confirm">确认</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 这是任务5选择各项参数的的对话框 -->
    <el-dialog v-model="session5.session5Visiable" title="用户集群多维特征分析" width="80%" :before-close="handleClose">
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
            <el-option label="双重聚类" value="DBSCAN" />
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
      <el-button type="primary" style="margin-left: 20px;width: 200px;" @click="quickstart5">快速测试(添加文件+参数)</el-button>
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
import { ref, reactive, onMounted, getCurrentInstance, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import bus from './public.js'

const { ipcRenderer } = require('electron')
const { shell } = require('electron')
const router = useRouter()
const { proxy } = getCurrentInstance()

const changWindowSize = () => {
  ipcRenderer.send('LoginOut')
}

onMounted(() => {
  changWindowSize()
})

const count = ref(0)

// 最近文件的列表(自动获取)
const last = reactive({
  data: [
    { name: 'test', path: 'f://test/tets/tets' },
    { name: 'test2', path: 'f://test/tets/tets2' },
  ],
})
proxy.$axios
  // .post('http://cupback.fcode.ltd/getlastpath')
  .post('http://127.0.0.1:5000/getlastpath')
  .then(function (res) {
    last.data = res.data.data
  })
const fileupload = reactive({
  name: '',
  fileList: [],
})
const dirupload = reactive({
  name: '',
  fileList: [],
})

const toVideo = () => {
  shell.openExternal('http://cupweb.fcode.ltd/#/display')
}
const toGuide = () => {
  shell.openExternal('http://cupweb.fcode.ltd/#/guide')
}
const toOfficialWeb = () => {
  shell.openExternal('http://cupweb.fcode.ltd')
}
const tologin = () => {
  router.push('login')
}

// 文件选中后调用的函数
const filehandleChange = (file, fileList) => {
  localStorage.setItem('session1FilePath', file.raw.path)
  localStorage.setItem('sessionType', 'file')
  if (router.currentRoute._value.path === '/data') {
    // router.go(0)
    pass
  } else {
    router.push('/data')
  }
}
// // 选中文件夹上传的函数
const dirhandleChange = (file, fileList) => {
  localStorage.setItem('session1DirPath', file.raw.path)
  localStorage.setItem('sessionType', 'dir')
  if (router.currentRoute._value.path === '/data') {
    // router.go(0)
    pass
  } else {
    router.push('/data')
  }
}

// 点击最近打开文件列表的点击事件
const clickPath = (path) => {
  // 如果该路径是文件的路径，那么：
  var pathList = path.split('.')
  var xlsx = pathList[pathList.length - 1] == 'xlsx'
  var xls = pathList[pathList.length - 1] == 'xls'
  var csv = pathList[pathList.length - 1] == 'csv'
  if (xlsx | xls | csv) {
    localStorage.setItem('session1FilePath', path)
    localStorage.setItem('sessionType', 'file')
    if (router.currentRoute._value.path === '/data') {
      // router.go(0)
      pass
    } else {
      router.push('/data')
    }
  } else {
    localStorage.setItem('session1DirPath', path)
    localStorage.setItem('sessionType', 'dir')
    if (router.currentRoute._value.path === '/data') {
      // router.go(0)
      pass
    } else {
      router.push('/data')
    }
  }
}

// 选择文件夹
nextTick(() => {
  console.log(document.getElementsByClassName('el-upload__input'))
  document.getElementsByClassName('el-upload__input')[1].webkitdirectory = true
})

// ***************额外的快速启动功能***********
const quickstart1 = () => {
  session1.fileList =
    'F:\\study\\com\\softwareCup\\website\\back\\file\\用户缴费数据1.xlsx'
  session1.u_name = '用户编号'
  session1.u_date = '缴费日期'
  session1.u_money = '缴费金额（元）'
}
const quickstart2 = () => {
  // session2.fileupload.fileList = "F:\\study\\com\\softwareCup\\website\\back\\file\\中间文件\\居民客户的用电缴费习惯分析1.csv"
  localStorage.setItem(
    'session2FilePath',
    'F:\\study\\com\\softwareCup\\website\\back\\file\\中间文件\\居民客户的用电缴费习惯分析1.csv'
  )
  session2.u_name = '用户编号'
  session2.u_count = '平均缴费次数(年)'
  session2.u_money = '平均缴费金额（元）'
}
const quickstart3 = () => {
  localStorage.setItem('session3FilePath', "F:\\study\\com\\softwareCup\\website\\back\\file\\用户价值预测训练数据.csv")
  localStorage.setItem('session3Func', 'gauss')
  localStorage.setItem('x_cols', ['缴费金额（元）', '应缴金额', '拖欠天数', '缴费次数'])
  localStorage.setItem('y_col', '用户类型')
  session3.session3Visiable = false
  if (router.currentRoute._value.path === '/session3') {
    router.go(0)
  } else {
    router.push('/session3')
  }
}
const quickstart4 = () => {
  localStorage.setItem('dirpath', "F:\\study\\com\\softwareCup\\website\\back\\file\\负荷预测数据集\\1000.csv")
  session4.date_col = '时间'
  session4.target = '负荷'
}
const quickstart5 = () => {
 localStorage.setItem('session5FilePath',"F:\\study\\com\\softwareCup\\website\\back\\file\\用户问卷信息1.xlsx")
 session5.func = "DBSCAN"
}

// *******************任务一的内容***********************
const session1 = reactive({
  session1Visiable: false,
  Tcolumns: [],
  u_name: '',
  u_date: '',
  u_money: '',
  fileList: '',
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
  nextTick(() => {
    console.log('---')
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

// *****************************这里是任务5的方法与变量定义 ********************
const session5 = reactive({
  session5Visiable: false,
  Tcolumns: [],
  filepath: '',
  percent: 0.5,
  fileupload: {
    fileList: [],
  },
  func: '',
})
const session5Confirm = () => {
  localStorage.setItem('percent', session5.percent)
  localStorage.setItem('func5', session5.func)
  console.log(session5.func)
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
</script>

<style>
/* 整体的样式 */
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  /* overflow: hidden; */
}
#app > div {
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
  background-color: rgb(46, 46, 46);
  color: rgb(204, 204, 204);
}
/* 以上均为整体的样式 */

/* 左侧的样式 */
.left {
  /* background-color: bisque; */
  width: 50%;
  height: 100%;
  float: left;
  text-align: left;
}

/* 按钮左对齐的样式 */
.left .el-button {
  justify-content: left;
  min-width: 300px;
  min-height: 60px;
  margin: 10px;
}
.right .el-button {
  justify-content: right;
  min-width: 300px;
  min-height: 60px;
  margin: 10px;
}

.right {
  /* background-color: blueviolet; */
  width: 50%;
  height: 100%;
  float: right;
  text-align: left;
}

.leftContent {
  position: relative;
  left: 40%;
  top: 20%;
  width: 25%;
  height: 16%;
  margin-left: -10%;
  margin-top: -8%;
}

.rightContent {
  position: relative;
  left: 30%;
  top: 20%;
  width: 25%;
  height: 16%;
  margin-left: -20%;
  margin-top: -8%;
  color: rgb(204, 204, 204);
}
.leftContent .el-icon {
  margin-right: 10px;
}
.rightContent .el-icon {
  margin-right: 10px;
}
.rightConleftContenttent .el-icon {
  margin-right: 10px;
}
</style>
