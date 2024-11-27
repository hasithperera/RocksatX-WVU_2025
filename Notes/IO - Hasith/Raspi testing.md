
- Configuring a 2nd ip on MAC
	`ifconfig en6 alias 10.42.0.XX/24 up`
- Remove interface add a `-alias`
- v3 mac: `b8:27:eb:ce:b8:86` (get this a static)

## Raspi commands

-  Setting date
		`date -s <output from date in linux/mac>`
- configuration for opencv

### Optical camera

- Test information with resolution 
![](res/Pasted%20image%2020241101222041.png)

Test images from raspi

![300](res/test.jpg)

## Footage and images

- From other balloons
	- https://www.youtube.com/watch?v=GcBsV4tqL40&t=35s
	- This shows some stuff and a good chat
		- I had seen this before our meeting 
		- https://www.youtube.com/watch?v=JJofuF2zcTE

## Raspi configuration and network configuration 

## login credentials

- user: pi
- password: raspberry 
## Wifi

- SSID: Frontier9040
- PSK: 1093891044
- ip: DHCP pool in 192.168.254.126-254 (not a fixed ip sorry)

## Access options

- to find the IP
	- `ifconfig wlan0`
	- you are looking for a `192.168.254.XXX` style address in the out of the previous command
	- make sure your computer is connected to the same network
- SSH is running that is the easiest way to get in
	- `ssh pi@<ip>`
- for file transfer you can use scp
	- `scp <file to be sent> pi@<ip>:<location>`
## Installing things

- to get internet access turn off the wifi device and plug the raspi in to a WVU network port it will connect itself automatically
	- check the time on the device to make sure its accurate. This gives you errors often