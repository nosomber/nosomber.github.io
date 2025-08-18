#aa7799 about font
#aa7799 a
#5f6aa0 标题颜色
#745996 verse
#507090 code


#337799 a:hover


#+BEGIN_SRC bash
  iwctl                                    #用这个工具配置
  device list                              #列出设备名， 比如无线网卡看到叫 wlan0
  station wlan0 scan                       #扫描网络
  station wlan0 get-networks               #列出网络 比如想连接 YOUR-WIRELESS-NAME 这个无线网络 
  station wlan0 connect YOUR-WIRELESS-NAME #进行连接 输入密码即可
  exit
#+END_SRC


  iwctl                                    #用这个工具配置
  device list                              #列出设备名， 比如无线网卡看到叫 wlan0
  station wlan0 scan                       #扫描网络
  station wlan0 get-networks               #列出网络 比如想连接 YOUR-WIRELESS-NAME 这个无线网络 
  station wlan0 connect YOUR-WIRELESS-NAME #进行连接 输入密码即可
  exit