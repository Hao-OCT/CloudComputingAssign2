<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
</head>
<body>
<el-row class="demo-autocomplete">
  <div id="app">
    <el-col :span="12">
      <div class="sub-title">Please enter departure</div>
      <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="Departure"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
    </el-col>
    </div>
</el-row>
</body>
<!-- import Vue before Element -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- import JavaScript -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
	
  
</html>

