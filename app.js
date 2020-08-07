// 该文件负责启动应用程序。应用程序逻辑应该放在 Admin.Application中应用程序类。
// 查找Admin.app.application类并启动
Ext.application({
  // 应用程序的命名空间
  name: "Admin",

  // 继承Admin.Application类，classic和modern里面都有这个类
  // 即各自的Application.js
  extend: "Admin.Application",

  // 引入应用程序中的所有类，确保所有管理类都将包含在应用程序构建中。
  // 如果类对彼此有特定的要求，您可能仍然需要它们显式引入
  // 引入了全部Admin命名空间里面的类
  requires: ["Admin.*"],
});
