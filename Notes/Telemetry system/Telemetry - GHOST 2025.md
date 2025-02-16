## Init meeting  - 2025.02.12

- Had a meeting with Greg,Gabriela and Hasith. (Justin not available)
	- Raspi based system using a pi 5,PCI card 
	- Hasith - test and write Raspi software
		- Might be able to handle images through the network
	- Gabriela - write a post processing application to get the data back to individual teams
		- once the packet specification is known generate a simulated data packet ? #ask 
			- packet spec refer below - 2025.02.15
		- Use the time line we have, based on altitude
		- This can be a good test data set to use
	- Possibly Justin/Greg -  if we get a 2nd interface, probably let B and E fields use that 
		- [ ] ask if this can be taken care of by the instrument / seperate system #ask
			- A nano can do it, all you need is 2 serial devices. m328pb as 2 build in and vertual serial works too 
			- any other HW is also fine
- Some thoughts that was talked about
	- use a header, old system used `DEADDEAD` as the start and end. some non random string should work
	- need to send experiments ID out 
---
## 2025.02.14 

- Weekly Zoom meeting - Nothing much new. Travel stuff mostly
- Zeke -  they have a format for data
	- rates up to 9 - 16 kBps
	- using 115200 for now
	- header: 3 Bytes > upto 2024 - 16 bit values > end: 3 Bytes
	- Hasith - asked for the specs and their software, they said it will be emailed to every one

---
### Header spec - Data (non images)

- using a similar format to what they had done in the past
- 3 bit header/footer: `aZa [exp id] [data] aZa`
	- ***Thoughts ?***
- data length can be variable and depending on which experiment this should change
- This can be put in a FIFO data structure capable of parallel access
	- Given the pi runs at MHz speeds we should be able to do it correctly without loss of data
### Image data - spec

- Comments Hasith: I dont like the JPG to text file cos if you loose any thing I dont think its recoverable. I would prefer a binary file and chuck it and send when ever available
- let the cam team do that for now #communicate
	- Network based file transfer is easer 
	- I will have to implement this any way
	- if they write in C we might be able to use the code in a 2nd thread
- image size: 1024 X 512 = $2^{10} X 2^9$  8 bit bw data
	- 19 bits for addressing
- Are they ok with implementing this ? #ask 
- packet: `aZa[00000111][8][8] [data 240] aZa`


---
### implementation - Todo

- [ ] Test Raspi + PCI serial module #task
- [ ] Basic C program to access single serial port #task
- [ ] save single serial port data to binary file #tas
- [ ] Multiple data save
#### By launch July 
- [ ] Multiport concurrent access / near real time access
- [ ] openMP threading and ques
- [ ] Speed tests
- [ ] Sim Data