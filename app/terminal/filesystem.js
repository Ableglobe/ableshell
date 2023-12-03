import { FileSystem } from 'javascript-terminal-turtle';

const filesystem = FileSystem.create({
    '/home': {},
    '/home/murphy/experience.txt': { content: 'Security Innovation - Remote - Pentester\n-> August 2023 - Present\n\nSecurity Innovation - Seattle, WA - Security Engineer Intern\n-> May 2023 - August 2023\n\nPurdue University - West Lafayette, IN - Windows System Administration TA\n-> August 2021 - May 2023\n\nDonaldson - Minneapolis, MN - SOC Intern\n-> June 2022 - August 2022' },
    '/home/murphy/about.txt': {
        content: 'Hi, I\'m Sasha.\n\nI started my education at the University of Washington in Seattle. In 2020, I transferred to Purdue University \nto pursue Cybersecurity in the Dept. of Computer & Information Technology, where I earned my bachelors.\n\nI currently work as a penetration tester for Security Innovation. I primarily work on web applications, but my\ninterests in the field include AD, network, IoT, and hardware hacking.'
    },
    '/home/murphy/personal.txt': { content: 'HackTheBox - Online Cybersecurity CTF\n-> Peaked top 10 in the US, top 80 globally (100+ solved machines)\n\nHackTheBox - Pro Labs\n-> Cybernetics (28 machines, Red Team Operator L2)\n-> Offshore (21 machines, Pentester L3)\n-> Zephyr (17 machines, Red Team Operator L1)\n-> Dante (14 machines, Pentester L2)\n\nVulnLab - Cybersecurity Labs\n-> Completed standalone machines, AD chains, and Wutai Lab\n\nHackerOne - Bug Bounty and CTF\n-> Invited to multiple private bug bounty programs\n\nNational Cyber League Spring 2022 CTF\n-> 1st in Web App Exploitation, 17th overall\n\nTracerFire 2022 CTF - Purdue University\n-> 1st Place' },
    '/home/miles': {},
    '/home/miles/passwords.txt': { content: '⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠛⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⠛⠛⠿⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⡀⠠⠤⠒⢂⣉⣉⣉⣑⣒⣒⠒⠒⠒⠒⠒⠒⠒⠀⠀⠐⠒⠚⠻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⡠⠔⠉⣀⠔⠒⠉⣀⣀⠀⠀⠀⣀⡀⠈⠉⠑⠒⠒⠒⠒⠒⠈⠉⠉⠉⠁⠂⠀⠈⠙⢿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠔⠁⠠⠖⠡⠔⠊⠀⠀⠀⠀⠀⠀⠀⠐⡄⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠉⠲⢄⠀⠀⠀⠈⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠊⠀⢀⣀⣤⣤⣤⣤⣀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠜⠀⠀⠀⠀⣀⡀⠀⠈⠃⠀⠀⠀⠸⣿⣿⣿⣿\n⣿⣿⣿⣿⡿⠥⠐⠂⠀⠀⠀⠀⡄⠀⠰⢺⣿⣿⣿⣿⣿⣟⠀⠈⠐⢤⠀⠀⠀⠀⠀⠀⢀⣠⣶⣾⣯⠀⠀⠉⠂⠀⠠⠤⢄⣀⠙⢿⣿⣿\n⣿⡿⠋⠡⠐⠈⣉⠭⠤⠤⢄⡀⠈⠀⠈⠁⠉⠁⡠⠀⠀⠀⠉⠐⠠⠔⠀⠀⠀⠀⠀⠲⣿⠿⠛⠛⠓⠒⠂⠀⠀⠀⠀⠀⠀⠠⡉⢢⠙⣿\n⣿⠀⢀⠁⠀⠊⠀⠀⠀⠀⠀⠈⠁⠒⠂⠀⠒⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⢀⣀⡠⠔⠒⠒⠂⠀⠈⠀⡇⣿\n⣿⠀⢸⠀⠀⠀⢀⣀⡠⠋⠓⠤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠈⠢⠤⡀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⡠⠀⡇⣿\n⣿⡀⠘⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠈⠑⡦⢄⣀⠀⠀⠐⠒⠁⢸⠀⠀⠠⠒⠄⠀⠀⠀⠀⠀⢀⠇⠀⣀⡀⠀⠀⢀⢾⡆⠀⠈⡀⠎⣸⣿\n⣿⣿⣄⡈⠢⠀⠀⠀⠀⠘⣶⣄⡀⠀⠀⡇⠀⠀⠈⠉⠒⠢⡤⣀⡀⠀⠀⠀⠀⠀⠐⠦⠤⠒⠁⠀⠀⠀⠀⣀⢴⠁⠀⢷⠀⠀⠀⢰⣿⣿\n⣿⣿⣿⣿⣇⠂⠀⠀⠀⠀⠈⢂⠀⠈⠹⡧⣀⠀⠀⠀⠀⠀⡇⠀⠀⠉⠉⠉⢱⠒⠒⠒⠒⢖⠒⠒⠂⠙⠏⠀⠘⡀⠀⢸⠀⠀⠀⣿⣿⣿\n⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠑⠄⠰⠀⠀⠁⠐⠲⣤⣴⣄⡀⠀⠀⠀⠀⢸⠀⠀⠀⠀⢸⠀⠀⠀⠀⢠⠀⣠⣷⣶⣿⠀⠀⢰⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠁⢀⠀⠀⠀⠀⠀⡙⠋⠙⠓⠲⢤⣤⣷⣤⣤⣤⣤⣾⣦⣤⣤⣶⣿⣿⣿⣿⡟⢹⠀⠀⢸⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠑⠀⢄⠀⡰⠁⠀⠀⠀⠀⠀⠈⠉⠁⠈⠉⠻⠋⠉⠛⢛⠉⠉⢹⠁⢀⢇⠎⠀⠀⢸⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠈⠢⢄⡉⠂⠄⡀⠀⠈⠒⠢⠄⠀⢀⣀⣀⣰⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⢀⣎⠀⠼⠊⠀⠀⠀⠘⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠉⠢⢄⡈⠑⠢⢄⡀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⢀⠀⠀⠀⠀⠀⢻⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣀⡈⠑⠢⢄⡀⠈⠑⠒⠤⠄⣀⣀⠀⠉⠉⠉⠉⠀⠀⠀⣀⡀⠤⠂⠁⠀⢀⠆⠀⠀⢸⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⡀⠁⠉⠒⠂⠤⠤⣀⣀⣉⡉⠉⠉⠉⠉⢀⣀⣀⡠⠤⠒⠈⠀⠀⠀⠀⣸⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣤⣤⣤⣤⣀⣀⣤⣤⣤⣶⣾⣿⣿⣿⣿⣿' },
    '/home/david': {},
    '/home/david/link': { content: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    '/home/andrew': {},
    '/home/andrew/is_even.ml': { content: 'let rec is_even n = \n  let () = assert (n >= 0) in\n  if n == 0 then true else\n  if n == 1 then false else\n    is_even (n - 2) in\n\nis_even 2147483647;; (* see!? *)' },
    '/home/andrew/isEven.java': { content: 'class IsEven {\n    public static void main(String[] args) {\n        isEven(Integer.MAX_VALUE); // why doesnt this work? see is_even.ml\n    }\n    \n    public static boolean isEven(int n) {\n        if (n < 0) {\n            throw new IllegalArgumentException();\n        }\n        if (n == 0) {\n            return true;\n        } else if (n == 1) {\n            return false;\n        }\n        return isEven(n - 2);\n    }\n}' },
    '/home/quegg': {},
    '/home/quegg/topol.top': { content: '#include "/gpfs/home/rafi/FinalProject4/top/gromos54a7_atb.ff/forcefield.itp"\n#include "/gpfs/home/rafi/FinalProject4/top/ZIF8.itp"\n#include "/gpfs/home/rafi/FinalProject4/top/gromos54a7_atb.ff/spc.itp"\n#include "/gpfs/home/rafi/FinalProject4/top/gromos54a7_atb.ff/ions.itp"\n\n\n[system]\n91EA in water\n\n[ molecules ]\n;molecules #molecules\n\n91EA     1\n\n\nSOL               990\n' },
    '/etc': {},
    '/etc/passwd': {
        content: `root:x:0:0:root:/root:/usr/bin/bash\nmurphy:x:1000:1000:murphy:/home/murphy:/bin/bash\nmilesmccray:x:1001:1001:milesmccray:/home/milesmccray:/bin/bash\nmiracle:x:1002:1002:miracle:/home/miracle:/bin/bash\nsupahclean:x:1003:1003:supahclean:/home/supahclean:/bin/bash\ncatofduty:x:1004:1004:catofduty:/home/catofduty:/bin/bash\ntreywheeler123:x:1005:1005:treywheeler123:/home/treywheeler123:/bin/bash\nninepuppy:x:1006:1006:ninepuppy:/home/ninepuppy:/bin/zsh\npsychwho:x:1007:1007:psychwho:/home/psychwho:/bin/bash\nquegg:x:1008:1008:quegg:/home/quegg:/bin/bash\nkaellenn:x:1009:1009:kaellenn:/home/kaellenn:/bin/bash`
    },
    '/etc/hostname': { content: 'turtle' },
    '/etc/hosts': { content: '127.0.0.1	localhost\n127.0.1.1	turtle\n# The following lines are desirable for IPv6 capable hosts\n::1     localhost ip6-localhost ip6-loopback\nff02::1 ip6-allnodes\nff02::2 ip6-allrouters\n\n# All of my insane difficulty HackTheBox solves :)\n10.10.11.199 pikatwoo.htb api.pokatmon-app.htb pokatdex-api-v1.pokatmon-app.htb\n10.10.11.141 scanned.htb\n10.10.11.207 coder.htb api.coder.htb\n10.10.11.215 bookworm.htb \n10.10.11.223 registrytwo.htb webhosting.htb admin.webhosting.htb\n10.10.11.190 derailed.htb\n10.10.11.181 absolute.htb dc.absolute.htb \n10.10.11.179 sekhmet.htb www.windcorp.htb windcorp.htb portal.windcorp.htb\n10.10.11.151 perspective.htb' },
    '/bin': {},
    '/bin/bash': { content: '' },
    '/bin/sh': { content: '' },
    '/bin/sh': { content: '' },
    '/bin/cp': { content: '' },
    '/bin/cd': { content: '' },
    '/bin/mkdir': { content: '' },
    '/bin/rmdir': { content: '' },
    '/bin/ls': { content: '' },
    '/bin/cat': { content: '' },
    '/bin/clear': { content: '' },
    '/bin/echo': { content: '' },
    '/bin/head': { content: '' },
    '/bin/history': { content: '' },
    '/bin/index': { content: '' },
    '/bin/whoami': { content: '' },
    '/bin/touch': { content: '' },
    '/bin/tail': { content: '' },
    '/bin/rm': { content: '' },
    '/bin/printenv': { content: '' },
    '/tmp': {},
    '/var': {},
    '/var/log': {},
    '/var/mail': {},
    '/var/mail/murphy': { content: '' },
    '/var/www': {},
    '/var/www/html': {},
    '/var/www/html/index.html': { content: '<!doctype html>\n<html>\n<head>\n<title>milestechniques.com</title>\n<meta name="description" content="Miles Techniques Official Website 2023">\n</head>\n<body>\n<h1>Welcome to milestechniques.com</h1><h2><a href="/sasha/database/budcoins.html">Sashas Budcoins Database</a></h2>\n<hr>\n<h2>Technique 1: The Loop Around Technique</h2>\n<p>"The loop around technique is the falsifying of ones beliefs to get them."</p>\n<img src="looparound.jpg">\n<hr>\n<h2>Technique 2: Spot Dodge 3 Times</h2>\n<p>"Spot dodging at an asynchromatic timing to annoy opponent, and then punish."</p>\n<img src="spotdodge.jpg">\n<hr>\n<h2>Technique 3: <a href="https://open.spotify.com/playlist/4lamlLGHGwBhw9uKJQW4gh?si=69aa9563d988497f">The Tetris Playlist</a></h2>\n<p>"Mismash of songs to motivate you and keep you on edge, so you can perform your best."</p>\n<img src="tetris.jpg">\n<hr>\n<h2>Technique 4: Beans</h2>\n<p><a href="./beans/beanpower.html">Beans.</a></p>\n<img src="beans.jpg">\n<hr>\n<h2>Technique 5: Hi Back</h2>\n<p>"This technique is used to show your dominance and your cool status over your friends and family, by saying "Hi back, Im..." followed by your name. The technique is only usable in response to someone saying "Im back."</p>\n<img src="hiback.jpg">\n</body>\n</html>' },
    '/var/www/html/sasha': {},
    '/var/www/html/sasha/database': {},
    '/var/www/html/sasha/database/budcoins.html': { content: '\n<h1>Sashas Budcoins Database</h1>\n<style type="text/css">\n    .tg  {border-collapse:collapse;border-spacing:0;}\n    .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n      overflow:hidden;padding:10px 5px;word-break:normal;}\n    .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n      font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n    .tg .tg-0lax{text-align:left;vertical-align:top}\n    </style>\n    <table class="tg">\n    <thead>\n      <tr>\n        <th class="tg-0lax"><span style="font-weight:bold">Names</span></th>\n        <th class="tg-0lax"><span style="font-weight:bold">Budcoins</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="tg-0lax">Miles</td>\n        <td class="tg-0lax">0</td>\n      </tr>\n      <tr>\n        <td class="tg-0lax">Andrew</td>\n        <td class="tg-0lax">0</td>\n      </tr>\n      <tr>\n        <td class="tg-0lax">Alex</td>\n        <td class="tg-0lax">0</td>\n      </tr>\n      <tr>\n        <td class="tg-0lax">Gavin</td>\n        <td class="tg-0lax">5</td>\n      </tr>\n      <tr>\n        <td class="tg-0lax">Zeke</td>\n        <td class="tg-0lax">0</td>\n      </tr>\n      <tr>\n        <td class="tg-0lax">Jason</td>\n        <td class="tg-0lax">0</td>\n      </tr>\n      <tr>\n        <td class="tg-0lax">David</td>\n        <td class="tg-0lax">0</td>\n      </tr>\n      <tr>\n        <td class="tg-0lax">Trey</td>\n        <td class="tg-0lax">0</td>\n      </tr>\n      <tr>\n        <td class="tg-0lax">Racheal</td>\n        <td class="tg-0lax">0</td>\n      </tr>\n    </tbody>\n    </table>' },
    '/root': {},
})

export default filesystem;