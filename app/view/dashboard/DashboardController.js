Ext.define("Admin.view.dashboard.DashboardController", {
  extend: "Ext.app.ViewController",
  alias: "controller.dashboard",

  requires: ["Ext.util.TaskRunner"],

  //   network的刷新，将前面的一条数据插到最后
  onRefreshToggle: function (tool, e, owner) {
    var store, runner;

    if (tool.toggleValue) {
      this.clearChartUpdates();
    } else {
      // 获取附加到此控制器附带的ViewModel的Ext.data.Store。
      store = this.getStore("networkData");

      //   显示在这个store里面的数据条数
      if (store.getCount()) {
        runner = this.chartTaskRunner;

        if (!runner) {
          this.chartTaskRunner = runner = new Ext.util.TaskRunner();
        }

        runner.start({
          interval: 200,
          run: function () {
            var rec = store.first();

            store.remove(rec);
            store.add(rec);
          },
        });
      }
    }

    // change the toggle value
    tool.toggleValue = !tool.toggleValue;
  },

  //   关闭图表的渲染
  clearChartUpdates: function () {
    this.chartTaskRunner = Ext.destroy(this.chartTaskRunner);
  },

  destroy: function () {
    this.clearChartUpdates();
    this.callParent();
  },

  //   首页隐藏
  onHideView: function () {
    this.clearChartUpdates();
  },
});
