import { Terminal } from 'javascript-terminal-turtle';

const customFileSystem = Terminal.FileSystem.create({
  '/root': {},
  '/root/about.txt': {
    content: `Hi, I'm Sasha.

I started my education at the University of Washington in Seattle. In 2020, I transferred to Purdue University
to pursue Cybersecurity in the Dept. of Computer & Information Technology, where I earned my bachelors.

I currently work as a penetration tester for Security Innovation. I primarily work on web applications, but my
interests in the field include AD, network, IoT, and hardware hacking.`
  },
  '/root/experience.txt': {
    content: `Security Innovation - Remote - Pentester
-> August 2023 - Present

Security Innovation - Seattle, WA - Security Engineer Intern
-> May 2023 - August 2023

Purdue University - West Lafayette, IN - Windows System Administration TA
-> August 2021 - May 2023

Donaldson - Minneapolis, MN - SOC Intern
-> June 2022 - August 2022`
  },
  '/root/projects.txt': {
    content: `HackTheBox - Online Cybersecurity CTF
-> Peaked top 10 in the US, top 80 globally (100+ solved machines)

HackTheBox - Pro Labs
-> Cybernetics (28 machines, Red Team Operator L2)
-> Offshore (21 machines, Pentester L3)
-> Zephyr (17 machines, Red Team Operator L1)
-> Dante (14 machines, Pentester L2)

VulnLab - Cybersecurity Labs
-> Completed standalone machines, AD chains, and Wutai Lab

National Cyber League Spring 2022 CTF
-> 1st in Web App Exploitation, 17th overall

TracerFire 2022 CTF - Purdue University
-> 1st Place`
  },
  '/root/ascii.txt': {
    content: `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠛⠛⠋⠉⠉⠉⠉...
    (truncated here for display)`
  },
  '/root/links.txt': {
    content: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
  },
  '/root/fun': {},
  '/root/fun/ocaml.txt': {
    content: `let rec is_even n = 
  let () = assert (n >= 0) in
  if n == 0 then true else
  if n == 1 then false else
    is_even (n - 2) in

is_even 2147483647;; (* see!? *)`
  },
  '/root/fun/java.txt': {
    content: `class IsEven {
    public static void main(String[] args) {
        isEven(Integer.MAX_VALUE); // why doesn't this work? see is_even.ml
    }
    
    public static boolean isEven(int n) {
        if (n < 0) {
            throw new IllegalArgumentException();
        }
        if (n == 0) {
            return true;
        } else if (n == 1) {
            return false;
        }
        return isEven(n - 2);
    }
}`
  },
  '/root/fun/gromacs.txt': {
    content: `#include "/gpfs/home/rafi/FinalProject4/top/gromos54a7_atb.ff/forcefield.itp"
#include "/gpfs/home/rafi/FinalProject4/top/ZIF8.itp"
#include "/gpfs/home/rafi/FinalProject4/top/gromos54a7_atb.ff/spc.itp"
#include "/gpfs/home/rafi/FinalProject4/top/gromos54a7_atb.ff/ions.itp"


[system]
91EA in water

[ molecules ]
;molecules #molecules

91EA     1

SOL               990`
  },
  '/root/etc': {},
  '/root/etc/passwd': {
    content: `root:x:0:0:root:/root:/usr/bin/bash
murphy:x:1000:1000:murphy:/home/murphy:/bin/bash
milesmccray:x:1001:1001:milesmccray:/home/milesmccray:/bin/bash
...`
  },
  '/root/etc/hosts': {
    content: `127.0.0.1\tlocalhost
127.0.1.1\tturtle
# The following lines are desirable for IPv6 capable hosts
::1     localhost ip6-localhost ip6-loopback
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters

# All of my insane difficulty HackTheBox solves :)
10.10.11.199 pikatwoo.htb api.pokatmon-app.htb pokatdex-api-v1.pokatmon-app.htb
10.10.11.141 scanned.htb
10.10.11.207 coder...`
  },
  '/root/etc/motd': {
    content: `turtle`
  }
});
