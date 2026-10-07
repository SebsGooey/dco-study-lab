/* Original educational practice. These are not Amazon interview questions or an official hiring rubric. */
window.STUDY_PRACTICE = {
  questions: [
    {
      id: 'q-hardware-01', category: 'hardware',
      question: 'A server has fans and power LEDs, but the console stops at a firmware memory error. Which failure stage best fits the evidence?',
      options: ['No power', 'DNS resolution failure', 'No POST / firmware initialization failure', 'Application authentication failure'],
      answer: 2,
      explanation: 'Power indications and a firmware error distinguish this from no power. POST is the firmware hardware-initialization stage before the normal operating-system boot. Capture the exact error, component identity, and recent changes before following the platform procedure. DNS and application authentication occur later and do not explain this observation.'
    },
    {
      id: 'q-hardware-02', category: 'hardware',
      question: 'What is the main troubleshooting value of a baseboard management controller (BMC)?',
      options: ['It can expose hardware health, event logs, and remote console functions independently of the normal OS path', 'It guarantees that the application is healthy whenever its web interface loads', 'It replaces the server power supplies', 'It is the same thing as a Linux SSH daemon'],
      answer: 0,
      explanation: 'A BMC supports out-of-band management, subject to its own power, network, permissions, and platform capabilities. It can help when the OS is unavailable. A reachable BMC does not establish application health or guarantee main-system power is healthy. SSH is an OS service, and a BMC does not replace a PSU.'
    },
    {
      id: 'q-hardware-03', category: 'hardware',
      question: 'A server reports a growing count of corrected ECC memory errors. What is the best interpretation?',
      options: ['ECC makes all memory errors harmless, so the alert can be closed', 'The filesystem must be reformatted', 'Every DIMM must be replaced immediately without further checks', 'Correction prevented some errors from reaching software, but recurrence warrants trend review and the approved hardware procedure'],
      answer: 3,
      explanation: 'ECC detects and corrects some error patterns; it does not make all faults harmless or correct every possible error. Review error type, trend, slot identification, and vendor/site thresholds. Escalate or replace according to the procedure. Filesystem reformatting is unrelated, and replacing every DIMM ignores evidence, authorization, and service impact.'
    },
    {
      id: 'q-hardware-04', category: 'hardware',
      question: 'A server has two power supplies. What must you establish before treating the power path as redundant?',
      options: ['Both power cables have the same color', 'Both supplies are healthy and appropriately sized, with the intended independent upstream feeds', 'The front power LED is green', 'The operating system has two user accounts'],
      answer: 1,
      explanation: 'Redundancy depends on healthy supplies, capacity to support the load after a failure, and the actual upstream wiring. Two supplies on the same failed source do not protect against that source failing. Cable color, a front LED, and account count do not establish independent power paths. Verify rather than unplugging a live feed to experiment.'
    },
    {
      id: 'q-hardware-05', category: 'hardware',
      question: 'The local monitor is blank. An approved remote console shows the OS running normally. What does this most strongly indicate?',
      options: ['The host necessarily failed POST', 'The boot disk necessarily failed', 'No local video is distinct from no boot; investigate the local display path', 'The server has no electrical power'],
      answer: 2,
      explanation: 'A running OS is direct evidence that the machine passed far enough through startup to boot. Check the selected input, cable, monitor, and console/video configuration before assuming a host failure. No local image alone does not identify a power, POST, or storage failure, and is not a reason to reboot an otherwise working service.'
    },
    {
      id: 'q-hardware-06', category: 'hardware',
      question: 'A DIMM replacement has been approved. Which preparation is most appropriate?',
      options: ['Confirm the exact asset and slot, compatible part and population rules, maintenance state, and ESD procedure', 'Assume all memory modules are hot-swappable', 'Swap several DIMMs at once to reduce diagnostic time', 'Use any module with the same physical length'],
      answer: 0,
      explanation: 'A reliable replacement requires identity, compatibility, safe service state, and the platform-specific procedure. Ordinary server DIMMs are not assumed hot-swappable. Multiple simultaneous substitutions obscure cause and can introduce new faults. Physical fit alone does not prove supported capacity, generation, speed, rank, or population configuration.'
    },
    {
      id: 'q-hardware-07', category: 'hardware',
      question: 'Several adjacent servers report high inlet temperature at nearly the same time. What is the most useful initial direction?',
      options: ['Replace every CPU', 'Delete application logs to reduce heat', 'Reinstall the operating systems', 'Check scope, temperature evidence, and shared airflow/cooling conditions, then escalate through the facility process'],
      answer: 3,
      explanation: 'A cluster of simultaneous inlet-temperature alerts suggests a shared environmental condition worth investigating. Check readings and timing, obstructions or recent work, and notify the responsible team using the site procedure. CPU replacements and reinstalls are unsupported guesses. Log deletion does not remedy a cooling fault. Do not independently operate facility cooling equipment.'
    },
    {
      id: 'q-storage-01', category: 'storage',
      question: 'Which statement correctly describes RAID 0?',
      options: ['It provides a full duplicate copy of every disk', 'It stripes data without disk redundancy; one member failure can destroy the array', 'It tolerates any two disk failures', 'It automatically preserves deleted files'],
      answer: 1,
      explanation: 'RAID 0 distributes data across member disks but has no mirror or parity redundancy. It can improve usable capacity/performance characteristics, but a member failure can make the array unusable. Mirroring describes RAID 1; dual parity describes RAID 6. No RAID level automatically supplies versioned recovery of deleted files.'
    },
    {
      id: 'q-storage-02', category: 'storage',
      question: 'In conventional RAID 5 and RAID 6 arrays, how many simultaneous member-disk failures can the redundancy tolerate?',
      options: ['RAID 5: two; RAID 6: three', 'RAID 5: zero; RAID 6: one', 'RAID 5: one; RAID 6: two', 'Both tolerate unlimited failures if a spare is installed'],
      answer: 2,
      explanation: 'RAID 5 uses single distributed parity and RAID 6 uses dual distributed parity. Their nominal failure tolerances are one and two members respectively. This is not a recovery guarantee in every failure scenario: additional read errors or other faults matter. A hot spare helps replacement/rebuild start; it does not instantly restore lost redundancy.'
    },
    {
      id: 'q-storage-03', category: 'storage',
      question: 'A four-disk RAID 10 consists of mirror pairs A/B and C/D, striped together. Which two-disk failure preserves one member of each pair?',
      options: ['A and C fail', 'A and B fail', 'C and D fail', 'Any two disks are equally safe'],
      answer: 0,
      explanation: 'If A and C fail, B and D still contain one surviving member from each mirror. Losing A and B, or C and D, loses an entire mirror in the striped set. The location of failures matters, so “RAID 10 tolerates any two failures” is incorrect. Even a survivable state requires urgent, controlled recovery.'
    },
    {
      id: 'q-storage-04', category: 'storage',
      question: 'A mirrored array is healthy, but a user accidentally deleted an important file. Why might the file still need to be restored from backup?',
      options: ['RAID only works with network files', 'Mirrors never contain file data', 'RAID prevents only CPU faults', 'The deletion is reflected in the live storage; redundancy is not versioned backup'],
      answer: 3,
      explanation: 'Mirroring preserves availability after some disk failures; it also reflects normal changes such as file deletion. Recovery may require a retained snapshot or separate backup with appropriate history. RAID protects against certain member failures, not every logical error, compromise, or disaster. A healthy array can faithfully store the wrong state.'
    },
    {
      id: 'q-storage-05', category: 'storage',
      question: 'A disk is flagged failed while the application still works. What should happen before removing a drive?',
      options: ['Remove the first disk with an activity LED', 'Confirm layout, redundancy, exact slot/serial, other member health, supported replacement procedure, and approval', 'Initialize the entire array to clear the alert', 'Assume every drive is hot-swappable because it has a tray'],
      answer: 1,
      explanation: 'A degraded array may still serve data with reduced protection. Removing the wrong disk or using an unsupported procedure can turn a recoverable event into an outage or data loss. Confirm slot and serial through the prescribed identification method. A tray does not prove hot-swap support; activity LEDs do not uniquely identify a failed member.'
    },
    {
      id: 'q-storage-06', category: 'storage',
      question: 'Which pairing correctly distinguishes an interface/protocol from a form factor?',
      options: ['M.2 is always NVMe and never SATA', 'HDD and SSD are connector standards', 'NVMe is a storage protocol; M.2 is a form factor that can support different interfaces', 'SAS and SATA are two names for the same interchangeable connection'],
      answer: 2,
      explanation: 'NVMe commonly runs over PCIe. M.2 describes a physical module/form-factor family, and an M.2 device may use SATA or PCIe/NVMe depending on its design and slot support. HDD/SSD describe media technologies. SAS and SATA differ, and connector appearance alone does not establish controller, backplane, or device compatibility.'
    },
    {
      id: 'q-networking-01', category: 'networking',
      question: 'An IPv4 host sends traffic to a remote subnet through its default gateway on Ethernet. Whose MAC address does it normally need for the outgoing local frame?',
      options: ['The remote Internet server’s MAC address', 'The DNS server’s MAC address regardless of route', 'A randomly chosen address from the switch table', 'The on-link next-hop gateway’s MAC address'],
      answer: 3,
      explanation: 'The route selects the next hop. For a remote destination reached through a local router, ARP resolves that router’s on-link IPv4 address. The local frame targets the router’s MAC while the IP packet targets the remote IP. MAC addresses are link-local forwarding information; a host does not ARP across the Internet for the destination server.'
    },
    {
      id: 'q-networking-02', category: 'networking',
      question: 'What is the network address for 192.168.10.70/26?',
      options: ['192.168.10.64', '192.168.10.0', '192.168.10.70', '192.168.10.128'],
      answer: 0,
      explanation: 'A /26 mask is 255.255.255.192, creating blocks of 64 addresses in the last octet: 0–63, 64–127, 128–191, and 192–255. Address .70 is in .64/26, whose broadcast is .127 and conventional host range is .65–.126. The host address itself is not the network address.'
    },
    {
      id: 'q-networking-03', category: 'networking',
      question: 'For a conventional IPv4 subnet 10.0.0.4/30, which addresses are usable hosts?',
      options: ['10.0.0.4 and 10.0.0.7', '10.0.0.5 and 10.0.0.6', '10.0.0.1 through 10.0.0.254', 'Only 10.0.0.4'],
      answer: 1,
      explanation: 'A /30 has four addresses: network .4, hosts .5 and .6, and broadcast .7. This question concerns a conventional /30, not the special /31 point-to-point case. The prefix length controls the boundary; seeing a 10.x address does not imply an entire /24 or /8 is the local subnet.'
    },
    {
      id: 'q-networking-04', category: 'networking',
      question: 'A newly connected server has physical link but cannot communicate with intended local peers. Which statement is correct?',
      options: ['A link LED proves the VLAN is correct', 'Only DNS can cause this symptom', 'An incorrect access VLAN can leave physical link up while placing the server in the wrong broadcast domain', 'Changing the hostname will repair the switch port'],
      answer: 2,
      explanation: 'Physical link is Layer 1 evidence. VLAN membership is Layer 2 configuration and can be wrong despite an illuminated link LED. Compare the intended VLAN, port mode, endpoint configuration, and peer behavior. DNS may affect names but does not explain every local-connectivity failure. A hostname change is not a VLAN repair.'
    },
    {
      id: 'q-networking-05', category: 'networking',
      question: 'An application works by the intended IP address but fails by its hostname. What is the best next diagnostic step?',
      options: ['Immediately replace the Ethernet cable', 'Disable the firewall permanently', 'Declare the DNS server failed without testing', 'Check how the exact name resolves and compare resolver results, while separating DNS from application/TLS behavior'],
      answer: 3,
      explanation: 'The difference makes name resolution a strong hypothesis, not a proven root cause. Use an appropriate lookup such as getent hosts or dig, inspect returned records, and compare against the expected address. Also consider hostname-based virtual hosting or certificate behavior. An IP-only test may exercise a different application path than the named request.'
    },
    {
      id: 'q-networking-06', category: 'networking',
      question: 'Which description of TCP and UDP is accurate?',
      options: ['TCP supplies a reliable ordered byte stream; UDP supplies datagrams without those built-in guarantees', 'UDP never reaches its destination', 'TCP guarantees the remote application is functioning correctly', 'TCP and UDP are physical cable types'],
      answer: 0,
      explanation: 'TCP handles connection setup, sequencing, retransmission, and ordered byte delivery. UDP preserves datagrams with a smaller transport mechanism; an application may add reliability itself. UDP is not inherently unusable, and a TCP connection does not prove business/application correctness. Both are transport-layer protocols, not cabling standards.'
    },
    {
      id: 'q-networking-07', category: 'networking',
      question: 'A ping to a server succeeds, but a TCP/22 connection times out. What has ping actually established?',
      options: ['SSH is listening and accepting credentials', 'Some ICMP/IP communication works, but TCP/22 and the SSH service still need testing', 'All firewall rules permit all traffic', 'The server has no networking fault of any kind'],
      answer: 1,
      explanation: 'ICMP echo success demonstrates that particular exchange, not every protocol or port. Check the target, port, listener/bind address, service, and network policy using an approved access path. Timeout, explicit refusal, and authentication failure lead to different next tests. A successful ping does not validate SSH credentials or exclude selective filtering.'
    },
    {
      id: 'q-networking-08', category: 'networking',
      question: 'What is the common initial DHCPv4 exchange used to obtain an address lease?',
      options: ['SYN, SYN-ACK, ACK, FIN', 'Request, Discover, Acknowledge, Offer', 'Discover, Offer, Request, Acknowledge', 'ARP, DNS, HTTP, SSH'],
      answer: 2,
      explanation: 'DORA is Discover, Offer, Request, Acknowledge. It describes a common initial DHCPv4 exchange; renewals and other states can differ. DHCP may also provide gateway and DNS settings. SYN/SYN-ACK/ACK belongs to TCP connection setup. ARP and DNS have different jobs and are not DHCP message names.'
    },
    {
      id: 'q-networking-09', category: 'networking',
      question: 'Which DNS statement is accurate?',
      options: ['DNS uses only UDP, never TCP', 'DNS assigns the physical switch port to a VLAN', 'DNS always guarantees the returned service is healthy', 'DNS commonly uses port 53 over UDP or TCP; resolving a record is separate from testing the service'],
      answer: 3,
      explanation: 'Traditional DNS supports UDP and TCP on port 53. A valid answer tells you about a record, not whether the application at that address is functioning. DHCP handles lease configuration, and switch configuration controls VLAN assignment. Encrypted DNS transports also exist, so do not treat this basic port fact as every possible DNS transport.'
    },
    {
      id: 'q-cabling-01', category: 'cabling',
      question: 'What does “patching network cables” normally mean in physical infrastructure work?',
      options: ['Connecting ports with patch cables, such as patch-panel ports to switch ports', 'Applying operating-system security updates', 'Changing all IP addresses in a subnet', 'Encrypting the contents of an Ethernet frame'],
      answer: 0,
      explanation: 'Here, patching refers to making physical connections, often using short, flexible patch cords between equipment and a patch panel. Software patching is a separate meaning of the same word. Terminating a cable means attaching its connector or terminating it at a jack/panel; testing checks the installed path. These are related but distinct tasks.'
    },
    {
      id: 'q-cabling-02', category: 'cabling',
      question: 'A new duplex-fiber link has no signal. Both ports are enabled. Which check belongs early in the investigation?',
      options: ['Change the DNS search suffix', 'Confirm intended endpoints, supported optic/media pairing, speed, and transmit-to-receive polarity', 'Increase application RAM', 'Point the fiber at your eye to look for light'],
      answer: 1,
      explanation: 'The physical path includes endpoints, fiber type, supported transceivers, wavelength/speed compatibility, distance, and polarity. For a conventional duplex link, each transmitter must reach the other receiver. DNS and RAM do not establish optical signal. Never look into a fiber or transceiver; use approved inspection tools and laser-safety procedures.'
    },
    {
      id: 'q-cabling-03', category: 'cabling',
      question: 'A link stays up but its CRC error counter increases rapidly during traffic. What is the best interpretation?',
      options: ['It proves the DNS cache is stale', 'It proves the application password is wrong', 'It indicates received-frame corruption and warrants physical-path/hardware checks using counter trends at both ends', 'Every packet drop is always a CRC error'],
      answer: 2,
      explanation: 'CRC growth indicates frames failing an integrity check. Investigate cable, connector, optic, port/NIC, and applicable link settings with evidence, not an assumed single cause. Compare changes over time and both endpoints. Congestion can create drops without CRC corruption, so error types are not interchangeable. DNS and passwords do not create Ethernet CRC failures.'
    },
    {
      id: 'q-cabling-04', category: 'cabling',
      question: 'Which is the strongest way to validate a copper structured-cabling installation when the job requires category/performance certification?',
      options: ['Confirm only that a link LED illuminates', 'Run one successful ping', 'Visually check that the jacket color is correct', 'Use the required calibrated certification tester, test limit, and records for that installed link'],
      answer: 3,
      explanation: 'A continuity test or successful packet exchange can be useful but does not certify category performance. The specified certification test measures the required properties against the relevant limit, and its record ties results to the link. Follow the project standard and equipment instructions. Jacket color alone does not establish category, termination quality, or performance.'
    },
    {
      id: 'q-cabling-05', category: 'cabling',
      question: 'A fiber connector may be contaminated. Which approach is appropriate?',
      options: ['Follow the approved inspect-clean-inspect process with suitable tools and laser precautions', 'Wipe it on clothing and reconnect', 'Touch the end face to test whether it feels dirty', 'Bend the cable tightly to force more light through'],
      answer: 0,
      explanation: 'Use approved cleaning/inspection equipment and the site’s procedure; never look into a live connector. Clothing and fingers can add contamination or damage the end face. Excessive bending can increase loss or damage the cable. Protect unused ends with suitable caps and verify the link after controlled remediation.'
    },
    {
      id: 'q-linux-01', category: 'linux',
      question: 'A Linux host shows very little “free” RAM. What should you examine before declaring memory exhaustion?',
      options: ['Only the hostname length', 'Available memory, cache, swap activity, process usage, and workload symptoms', 'Whether a monitor is plugged in', 'The number of directories under /home alone'],
      answer: 1,
      explanation: 'Linux uses otherwise idle memory for caches. The available estimate and active swapping, pressure, process usage, and observed latency are more informative than free alone. Tools such as free -h and vmstat 1 5 help establish the state. A low free value is not by itself justification to restart services or kill processes.'
    },
    {
      id: 'q-linux-02', category: 'linux',
      question: 'What can explain high Linux load average while CPUs are not fully utilized?',
      options: ['Load average is always identical to CPU utilization', 'DNS records directly count as running processes', 'Tasks in uninterruptible waits, often associated with I/O, can contribute to load', 'A low battery in a USB keyboard always causes it'],
      answer: 2,
      explanation: 'Linux load reflects runnable work and tasks in uninterruptible sleep, not just CPU percentage. Examine CPU state, processes, storage/I/O evidence, and changes over time before assigning a cause. High load alone does not prove a CPU shortage, and its meaning also depends on CPU count and the normal workload baseline.'
    },
    {
      id: 'q-linux-03', category: 'linux',
      question: 'An application says “No space left on device,” but df -h shows free capacity on the correct filesystem. Which additional check is especially useful?',
      options: ['Immediately format the filesystem', 'Change the hostname', 'Restart the switch', 'Check inode usage with df -i, then investigate other relevant limits such as quota'],
      answer: 3,
      explanation: 'A filesystem can exhaust its available inodes while still having free data blocks, especially with many small files. Confirm the actual mount and application error; quota and other limits may also matter. Formatting is destructive, and a switch restart or hostname change does not diagnose filesystem capacity. Remediation must target the demonstrated constraint.'
    },
    {
      id: 'q-linux-04', category: 'linux',
      question: 'What does the command ss -lnt show?',
      options: ['Listening TCP sockets with numeric addresses and ports', 'All DNS records for the host', 'Only failed login attempts', 'A list of disk partitions'],
      answer: 0,
      explanation: 'The options mean listening (-l), numeric (-n), and TCP (-t). Inspect the bind address as well as the port: a service on 127.0.0.1 is not listening on an external IPv4 interface. This command does not itself prove end-to-end reachability. Logs show login attempts; lsblk is useful for block-device layout.'
    },
    {
      id: 'q-linux-05', category: 'linux',
      question: 'An SSH service is listening only on 127.0.0.1:22. What does that imply for a connection to the host’s external IPv4 address?',
      options: ['Every remote host can connect because port 22 appears', 'That listener is bound to loopback, so it does not by itself accept connections addressed to the external interface', 'The Ethernet cable is definitely faulty', 'The root filesystem is definitely full'],
      answer: 1,
      explanation: 'A loopback-only listener accepts connections addressed to that local loopback interface, not a normal external interface address. Check intended configuration and authorized remediation; do not blindly expose a service. A process can be running while bound incorrectly for the intended access. The listener output does not prove a cable or storage fault.'
    },
    {
      id: 'q-linux-06', category: 'linux',
      question: 'An application account must create a file inside a directory. Which traditional Unix permission requirement is relevant?',
      options: ['Only read permission on the target directory', 'Execute permission on the new file before it exists', 'Write and search/execute permission on the containing directory, with search access through parent directories', 'A chmod 777 on the whole filesystem is always required'],
      answer: 2,
      explanation: 'Directory write permission allows changing entries, and directory execute/search allows traversal. Parent-path search permission also matters. Ownership, ACLs, quotas, read-only mounts, and mandatory access controls can add constraints. Read-only access is insufficient to create entries. Broad chmod 777 is an unsafe workaround that obscures the intended access model.'
    },
    {
      id: 'q-linux-07', category: 'linux',
      question: 'A systemd-managed service just failed. What is a useful first evidence-gathering pair?',
      options: ['mkfs followed by reboot', 'kill -9 on all processes followed by clearing logs', 'chmod -R 777 / followed by changing the root password', 'systemctl status for the actual unit and journalctl filtered to that unit and the failure time'],
      answer: 3,
      explanation: 'Status and time-bounded unit logs help identify the failure and surrounding context before you change state. The unit may be named ssh or sshd depending on the distribution. A restart may be justified later, but capture evidence and assess impact first. Formatting, blanket process killing, and broad permissions changes are not diagnostic substitutes.'
    },
    {
      id: 'q-linux-08', category: 'linux',
      question: 'df reports much more space used than expected from a directory-size scan. A deleted log is still held open by a running process. What is the best explanation and next step?',
      options: ['The open file can retain allocated space; identify the holder and coordinate an approved rotation/reopen or service action', 'Deleting a filename always releases its space immediately regardless of open handles', 'The network switch is storing the missing blocks', 'The disk must be physically replaced immediately'],
      answer: 0,
      explanation: 'Unlinking a file removes its directory entry, but an open handle can keep its storage allocated until released. An authorized tool such as lsof can help find deleted-open files if installed and permitted. Coordinate a safe reopen/rotation or service action; do not kill processes blindly. Also account for mount boundaries and filesystem overhead when comparing df and du.'
    },
    {
      id: 'q-operations-01', category: 'operations',
      question: 'During an approved change, alerts spread to several systems outside the expected scope. What should you do first?',
      options: ['Finish every remaining step before mentioning the alerts', 'Pause risky continuation, assess impact, notify the incident/change owner, and use the approved escalation or rollback path', 'Delete alerts so the dashboard is readable', 'Make several additional changes to see which helps'],
      answer: 1,
      explanation: 'Unexpected impact changes the risk assessment. Preserve the timeline and evidence, communicate the affected scope, and coordinate the prescribed response. A rollback is appropriate when its conditions, safety, and authority are established, not automatically in every situation. Continuing blindly or improvising multiple changes can worsen impact and make causality harder to establish.'
    },
    {
      id: 'q-operations-02', category: 'operations',
      question: 'Which shift handoff is most useful for an unresolved incident?',
      options: ['“Still broken. Good luck.”', 'A long command history without host names or outcomes', 'Impact, exact assets, timeline, evidence, changes/tests and results, current risks, next action and named owner', 'Only a guess at the root cause written as a confirmed fact'],
      answer: 2,
      explanation: 'A good handoff lets the next person continue safely without repeating risky work or rediscovering the basics. Include what is confirmed versus suspected, what has changed, ongoing recovery, and the next update time. A raw command dump lacks interpretation, while unsupported certainty can send the next technician down the wrong path.'
    },
    {
      id: 'q-operations-03', category: 'operations',
      question: 'A customer is impatient and asks you to skip the asset-identification step before a cable move. What is the strongest response?',
      options: ['Move the nearest matching cable because speed is customer obsession', 'Refuse to communicate further', 'Ask a colleague to guess the cable so you are not responsible', 'Explain the outage risk briefly, verify the exact endpoints, and follow the approved procedure while updating the customer'],
      answer: 3,
      explanation: 'Customer focus includes protecting the customer from avoidable disruption. Explain the purpose of the check, give a concrete next step, and remain responsive. Bypassing identity and authorization is not ownership. Escalate a genuine urgency conflict through the proper channel rather than guessing or becoming adversarial.'
    },
    {
      id: 'q-operations-04', category: 'operations',
      question: 'A replacement part shows healthy status. What else is needed before calling the incident resolved?',
      options: ['Verify the intended service and relevant error trends, document the change, and communicate any remaining recovery or risk', 'Nothing; one green light proves every dependency works', 'Immediately remove all monitoring', 'Erase the incident timeline'],
      answer: 0,
      explanation: 'Component health and service recovery are separate. Check the actual user/workload path and watch for recurrence; a storage rebuild may still be running even after a replacement is recognized. Record what changed and any follow-up owner. Closing solely on an LED can miss remaining impact, and monitoring/timeline evidence should be preserved.'
    },
    {
      id: 'q-operations-05', category: 'operations',
      question: 'You are assigned an unfamiliar controller model. What is the best way to show ownership?',
      options: ['Pretend it matches a controller you know', 'State the limit, collect useful evidence, consult the approved procedure, and escalate with a specific request if needed', 'Try undocumented reset combinations until something happens', 'Wait silently without recording the impact'],
      answer: 1,
      explanation: 'Ownership combines honest limits with forward progress. Verify the model, fault, and current service state, then use approved guidance and appropriate expertise. A useful escalation includes tests and results so the next person can act. Guessing at undocumented resets or concealing uncertainty creates risk; passive silence does not advance resolution.'
    },
    {
      id: 'q-behavioral-01', category: 'behavioral',
      question: 'Which structure most clearly answers “Tell me about a difficult incident you resolved”?',
      options: ['List every product you have ever used', 'Describe an imaginary ideal incident in detail', 'Describe one true event, your responsibility, your decisions/actions, and the result and learning', 'Discuss only what the team did without identifying your contribution'],
      answer: 2,
      explanation: 'STAR organizes Situation, Task, Action, and Result. A concrete true event lets the interviewer probe your reasoning and personal contribution. Include learning where relevant. Tool lists do not demonstrate decisions, hypothetical events do not answer a past-experience prompt, and “we” without role boundaries hides what you actually did.'
    },
    {
      id: 'q-behavioral-02', category: 'behavioral',
      question: 'You remember that an improvement helped, but cannot support an exact percentage. What should you say?',
      options: ['Choose a plausible large percentage', 'Claim the team measured it even if it did not', 'Avoid giving any result at all', 'Use the result you can support, explain how it was observed, and label any estimate clearly'],
      answer: 3,
      explanation: 'Specific evidence need not be an invented metric. You can describe verified outcomes such as removal of a repeated step, successful recovery, or observed reduction in repeat incidents, while being clear about what was measured. Unsupported precision damages credibility under follow-up. Keep estimates distinct from recorded figures and explain their basis.'
    },
    {
      id: 'q-behavioral-03', category: 'behavioral',
      question: 'Which answer best demonstrates learning from a mistake?',
      options: ['Explain the actual mistake, your responsibility, how you limited/repaired impact, and the specific prevention change', 'Say you have never made any mistake', 'Spend the whole answer blaming a colleague', 'Describe a weakness that is secretly a strength without an event'],
      answer: 0,
      explanation: 'A credible mistake story shows accountability and changed behavior. State your role without taking credit or blame for things you did not do, then explain recovery, communication, and prevention. A perfection claim, blame-only narrative, or disguised-strength answer gives little evidence of reflection or improvement.'
    },
    {
      id: 'q-behavioral-04', category: 'behavioral',
      question: 'An interviewer asks, “Why did you choose that troubleshooting step?” What should your answer emphasize?',
      options: ['The number of acronyms in the tool name', 'The evidence available then, competing explanations, tradeoffs, and what the test would distinguish', 'A memorized definition of every Leadership Principle', 'A complete retelling of the story from the beginning'],
      answer: 1,
      explanation: 'The follow-up tests judgment. Explain what you knew at that moment, what you did not know, and why the next test had value relative to alternatives and risk. Naming principles or tools is not a substitute for reasoning. Answer the specific follow-up directly rather than restarting a long prepared speech.'
    },
    {
      id: 'q-behavioral-05', category: 'behavioral',
      question: 'Which approach best prepares behavioral stories for follow-up questions?',
      options: ['Memorize a script word for word and use it regardless of the prompt', 'Create one fictional story that fits every principle', 'Keep concise factual cue cards and rehearse decisions, evidence, results, and role boundaries in varied question order', 'Spend all preparation time memorizing job-title definitions'],
      answer: 2,
      explanation: 'A factual cue card makes recall flexible without turning the interview into a recital. Practice who did what, why alternatives were rejected, what evidence supported the result, and what you would improve. Stories must remain true. Scripts and invented universal stories tend to break when the interviewer probes an unexpected detail.'
    }
  ],
  cards: [
    { id: 'f-hardware-01', category: 'hardware', front: 'No power, no POST, and no boot: what is the difference?', back: 'No power: expected power indications are absent. No POST: power exists but firmware initialization fails. No boot: firmware progresses but the OS does not load. Capture the exact stage and error before choosing a repair.' },
    { id: 'f-hardware-02', category: 'hardware', front: 'Describe the normal boot path.', back: 'Power → firmware/POST → boot-device selection → bootloader → kernel/initramfs → init or service manager → services. Use the last successful stage to narrow the fault.' },
    { id: 'f-hardware-03', category: 'hardware', front: 'What is a BMC, and what does it not prove?', back: 'A baseboard management controller can expose hardware health, logs, power controls, and remote console outside the normal OS path. A reachable BMC does not prove that the OS or application is healthy.' },
    { id: 'f-hardware-04', category: 'hardware', front: 'What does ECC memory provide?', back: 'Detection and correction of some memory-error patterns. Recurring corrected errors still deserve trend review; uncorrectable errors can disrupt service. Identify the exact slot and follow platform thresholds and procedures.' },
    { id: 'f-hardware-05', category: 'hardware', front: 'Why do two PSUs not automatically prove redundancy?', back: 'You must verify health, sufficient remaining capacity, correct wiring, and intended feed independence. Two PSUs can share a common upstream failure. Do not test by casually disconnecting live power.' },
    { id: 'f-hardware-06', category: 'hardware', front: 'What is PXE?', back: 'Preboot Execution Environment: a network-boot mechanism. Diagnose the firmware/NIC and link, then the address and boot-service path for that implementation. PXE failure is not automatically a failed local disk.' },
    { id: 'f-storage-01', category: 'storage', front: 'RAID 0 versus RAID 1?', back: 'RAID 0 stripes without disk redundancy. A conventional two-disk RAID 1 mirrors and can survive one member failure. Neither substitutes for a separate, recoverable backup.' },
    { id: 'f-storage-02', category: 'storage', front: 'RAID 5 versus RAID 6?', back: 'RAID 5 has single parity and nominally tolerates one member failure. RAID 6 has dual parity and nominally tolerates two. Rebuilds take time and remaining errors/failures can threaten recovery.' },
    { id: 'f-storage-03', category: 'storage', front: 'Can RAID 10 survive any two disk failures?', back: 'No. In a conventional stripe of two-disk mirrors, it can survive multiple failures only if every mirror retains a member. Two failures in the same mirror can lose the array.' },
    { id: 'f-storage-04', category: 'storage', front: 'Why is “degraded but online” urgent?', back: 'The service may still work while protection is reduced. Confirm the layout and remaining member health, replace only the identified component by procedure, and monitor recovery through completion.' },
    { id: 'f-storage-05', category: 'storage', front: 'SATA, SAS, NVMe, M.2, SSD: separate the terms.', back: 'SATA/SAS are storage interface families; NVMe is a protocol commonly over PCIe; M.2 is a form factor; SSD describes solid-state media. Physical fit alone does not establish compatibility.' },
    { id: 'f-networking-01', category: 'networking', front: 'What does a switch learn, and what does a router use?', back: 'An Ethernet switch learns source MAC addresses and forwards within Layer 2 domains using its forwarding table. A router selects next hops using IP routes between networks. A Layer 3 switch can perform both roles.' },
    { id: 'f-networking-02', category: 'networking', front: 'What does ARP resolve? What does IPv6 use?', back: 'ARP maps an on-link IPv4 next-hop address to its link-layer address. For a remote subnet, that is typically the gateway. IPv6 uses Neighbor Discovery rather than ARP.' },
    { id: 'f-networking-03', category: 'networking', front: 'Access port versus VLAN trunk?', back: 'An access port normally serves one untagged endpoint VLAN. A trunk can carry multiple VLANs, typically using tags, with platform-specific native/untagged behavior. Confirm both ends agree; link up does not prove configuration matches.' },
    { id: 'f-networking-04', category: 'networking', front: 'Work out 192.168.10.70/26.', back: 'Mask 255.255.255.192; block size 64. Network 192.168.10.64, broadcast .127, conventional host range .65–.126. Address .130 is in a different /26.' },
    { id: 'f-networking-05', category: 'networking', front: 'DNS versus DHCP?', back: 'DNS answers queries about names and records. DHCP can lease address settings and supply gateway/DNS configuration. Initial DHCPv4 commonly follows Discover → Offer → Request → Acknowledge.' },
    { id: 'f-networking-06', category: 'networking', front: 'TCP setup and TCP versus UDP?', back: 'Typical TCP setup: SYN → SYN-ACK → ACK. TCP provides reliable ordered bytes; UDP sends datagrams without built-in delivery/order guarantees. An application can add reliability on top of UDP.' },
    { id: 'f-networking-07', category: 'networking', front: 'Which service ports are useful to recall?', back: 'SSH 22/TCP; DNS 53/UDP and TCP; DHCPv4 67/68 UDP; HTTP 80/TCP; HTTPS commonly 443/TCP; HTTP/3 uses QUIC/UDP 443; NTP 123/UDP; SNMP commonly 161/162 UDP.' },
    { id: 'f-networking-08', category: 'networking', front: 'What does a successful ping fail to prove?', back: 'It does not prove the intended TCP/UDP port is reachable, that a service is listening, that authentication succeeds, or that the application is healthy. Failed ping also does not prove every application is down: ICMP may be filtered.' },
    { id: 'f-cabling-01', category: 'cabling', front: 'Patching, terminating, and testing: what are they?', back: 'Patching connects ports with patch cables. Terminating attaches conductors or fibers to the appropriate connector/jack/panel using the specified method. Testing checks the path; certification verifies prescribed performance limits.' },
    { id: 'f-cabling-02', category: 'cabling', front: 'What must match for a fiber connection?', back: 'The intended endpoints, supported optics, speed, wavelength pairing, fiber type and distance/loss budget, connectors, and polarity. For standard duplex fiber, transmit must reach receive. Follow model-specific compatibility guidance.' },
    { id: 'f-cabling-03', category: 'cabling', front: 'What do CRC errors suggest, and what do they not prove?', back: 'Received-frame corruption. Compare rate, traffic, and both ends; investigate the physical path and hardware. They do not identify one component automatically, and congestion drops are not the same as CRC errors.' },
    { id: 'f-cabling-04', category: 'cabling', front: 'How should fiber connectors be inspected and cleaned?', back: 'Use approved tools and an inspect-clean-inspect procedure with laser precautions. Never look into fiber or a transceiver. Avoid touching end faces, protect bend radius, and cap unused connectors appropriately.' },
    { id: 'f-cabling-05', category: 'cabling', front: 'Why change one cable-path variable at a time?', back: 'A controlled substitution lets you attribute the result. Verify authorization and redundancy, label/record endpoints, use a compatible known-good part, compare error trends, and preserve a rollback path.' },
    { id: 'f-linux-01', category: 'linux', front: 'Which commands establish host, OS, and kernel context?', back: 'hostname identifies the host; cat /etc/os-release identifies the distribution; uname -r reports the running kernel. Confirm you are on the intended host before interpreting output or changing state.' },
    { id: 'f-linux-02', category: 'linux', front: 'High load versus high CPU: what is the distinction?', back: 'Linux load includes runnable tasks and uninterruptible waits, often I/O-related. Use uptime, top, process state, and I/O evidence. Interpret load relative to CPU count, the baseline, and user-visible symptoms.' },
    { id: 'f-linux-03', category: 'linux', front: 'How do you assess memory pressure?', back: 'Check free -h, available memory, process consumption, and vmstat 1 5 for trends such as active swapping. Low free alone can be normal caching. Correlate observations with performance and logs.' },
    { id: 'f-linux-04', category: 'linux', front: 'df, du, df -i, lsblk, findmnt: which question does each answer?', back: 'df: filesystem space. du: size of reachable files/directories. df -i: inode use. lsblk: block-device layout. findmnt: mounts. Confirm mount boundaries and deleted-open files when totals differ.' },
    { id: 'f-linux-05', category: 'linux', front: 'What do ip addr, ip route, and ip neigh show?', back: 'Interface addresses/prefixes, routing decisions, and neighbor-cache state respectively. A correct-looking address or default route alone does not prove link, gateway reachability, VLAN membership, or service availability.' },
    { id: 'f-linux-06', category: 'linux', front: 'What is a focused Linux service investigation?', back: 'Inspect systemctl status for the actual unit, journalctl filtered by unit/time, ss for listener address/port, and a relevant local test. Compare remote behavior before choosing a targeted, approved change.' },
    { id: 'f-linux-07', category: 'linux', front: 'What can cause a write failure despite free disk space?', back: 'Exhausted inodes, permissions/ownership/ACLs, parent traversal, read-only mount, quota, security policy, or an application-specific error. Check the exact path and process identity; avoid broad chmod or blind deletion.' },
    { id: 'f-operations-01', category: 'operations', front: 'A six-step troubleshooting structure?', back: 'Clarify scope/impact → observe evidence → isolate competing causes → act with approval/procedure → verify component and service → document and communicate. Explain what each test result would change.' },
    { id: 'f-operations-02', category: 'operations', front: 'What belongs in an escalation?', back: 'Impact, exact asset/location, timeline, confirmed evidence, hypotheses, tests and results, changes made, current state/risk, and a specific request or next action. Identify owner and update time.' },
    { id: 'f-operations-03', category: 'operations', front: 'What should trigger pausing an approved change?', back: 'Unexpected scope or impact, unclear asset identity, lost redundancy, unsafe conditions, or a failed prerequisite/stop condition. Notify the owner and follow the approved escalation or rollback decision.' },
    { id: 'f-operations-04', category: 'operations', front: 'What is a safe response to unfamiliar equipment?', back: 'State your limit, confirm the model and symptoms, collect read-only evidence, consult the approved runbook, and involve qualified help. Describe progress and a specific next step instead of guessing or waiting silently.' },
    { id: 'f-operations-05', category: 'operations', front: 'What should be verified after repair?', back: 'Correct component recognition/health, relevant counters/logs, actual workload or customer path, and stability over an appropriate observation period. Record remaining rebuilds or risks and hand them to an identified owner.' },
    { id: 'f-behavioral-01', category: 'behavioral', front: 'STAR: what belongs in each part?', back: 'Situation: one concrete event and stakes. Task: your responsibility. Action: your decisions and work, including why. Result: supported outcome and learning. Keep context short enough to leave room for your actions.' },
    { id: 'f-behavioral-02', category: 'behavioral', front: 'How do you use “I” and “we” accurately?', back: 'Credit team contributions with “we,” then identify your exact decisions, tests, implementation, or communication with “I.” Do not take another person’s work or hide your own contribution in a vague team summary.' },
    { id: 'f-behavioral-03', category: 'behavioral', front: 'What makes a result credible without a percentage?', back: 'An observable outcome plus how you verified it: restored service, completed migration, eliminated a repeated step, or documented feedback. Use only true examples. Label estimates and never invent precise metrics.' },
    { id: 'f-behavioral-04', category: 'behavioral', front: 'What follow-ups should every story survive?', back: 'What did you personally do? Why that option? What alternatives and risks existed? What evidence did you use? Who disagreed? How did you verify the result? What would you change next time?' }
  ],
  scenarios: [
    {
      id: 's-01', category: 'hardware', title: 'One server will not power on',
      prompt: 'A monitoring ticket says a server is unreachable. At the rack, the expected front power indication is absent. Other hosts nearby appear healthy. Give a 60–90 second initial plan, then state what evidence would change your next step.',
      checks: [
        'Confirm the ticket, exact asset, current service impact, and whether the scope is truly one host.',
        'Inspect approved external power/PSU indications and management status if available; distinguish missing input power from host-start failure.',
        'Check the intended power path and recent work without assuming both PSUs or upstream feeds are healthy.',
        'Follow model/site procedures and authorization; protect redundancy and avoid resetting a shared PDU or opening energized electrical equipment.',
        'After approved remediation, verify hardware plus OS/service recovery, preserve evidence, and update the ticket or escalate with a clear next request.'
      ],
      followups: ['What changes if five servers on the same feed fail together?', 'Could a reachable BMC coexist with a main-host power problem?', 'What would you include in an escalation to the facilities or hardware owner?'],
      sample: 'I would confirm the server identity and impact, then separate one-host failure from a shared power issue. I would gather front and PSU indications, BMC evidence if available, and the recent-change timeline. I would trace only the approved external power checks and verify remaining redundancy before any action. I would not reset shared power to test a theory. The exact fault and runbook determine whether this needs a permitted component action or escalation. Afterward, I would check boot, health logs, and the actual workload, then document the evidence and result.'
    },
    {
      id: 's-02', category: 'hardware', title: 'A memory fault blocks POST',
      prompt: 'After a maintenance window, firmware reports a DIMM initialization error and the OS does not start. The ticket only says “memory issue.” Explain your investigation and safe repair boundaries.',
      checks: [
        'Identify the failure as a firmware/POST-stage issue and capture the exact code, indicated slot, and recent maintenance details.',
        'Verify model-specific slot naming, supported memory configuration, part compatibility, and available hardware logs.',
        'Form competing explanations such as seating, incompatible population, or a failed module/path, and choose a test that distinguishes them.',
        'Require approved service state, ESD precautions, and the model procedure before reseating/substituting; change one variable at a time.',
        'Verify successful POST, expected memory capacity and health, OS/service recovery, and recurrence monitoring before closing.'
      ],
      followups: ['What if the error follows a DIMM to another approved test slot?', 'What if it remains at the same slot?', 'Why is a corrected-error alert different from a failure to initialize memory?'],
      sample: 'I would capture the firmware message before assuming a bad DIMM, confirm the asset and indicated slot, and review what changed. The hardware guide determines valid population and parts. I would compare the installed configuration with that requirement and inspect management logs. Any reseat or controlled substitution would follow approved maintenance and ESD procedures, with one variable changed at a time. If the evidence points beyond the module, I would escalate rather than improvising motherboard work. Recovery means POST passes, expected memory is recognized, no relevant new errors appear, and the workload returns.'
    },
    {
      id: 's-03', category: 'hardware', title: 'POST completes but the OS will not load',
      prompt: 'A server finishes POST and then displays “no bootable device.” It was running yesterday. You have an approved remote console. Walk through what you would establish before changing anything.',
      checks: [
        'Capture the exact console state, asset, service impact, last known good time, and recent firmware/storage/configuration changes.',
        'Check whether expected boot devices and the controller are detected and healthy, including redundancy/layout where applicable.',
        'Compare intended boot mode/order and device selection before assuming the operating system is corrupt.',
        'Investigate bootloader/OS paths only as supported by evidence; avoid blind reinstall, initialization, formatting, or uncontrolled firmware changes.',
        'Use an approved recovery/escalation path, then verify boot, storage health, application state, and documentation.'
      ],
      followups: ['How would an undetected controller differ from a detected disk with a bootloader error?', 'What recent change could affect boot mode or order?', 'Why is reinstalling immediately a poor first action?'],
      sample: 'Because POST completes, I would focus on boot-device discovery and selection while checking for underlying storage faults. I would capture the error and changes, then inspect whether the expected controller and boot device are visible and healthy. A wrong boot entry or mode is different from a missing device; neither should be solved by guessing. If the device is present, the next checks may involve the bootloader under the recovery procedure. I would preserve data and evidence, coordinate any change, and verify both startup and the service after recovery.'
    },
    {
      id: 's-04', category: 'storage', title: 'A failed disk, a still-running workload',
      prompt: 'A storage alert identifies one failed member in a redundant array. The application is still serving traffic. You are asked to replace the disk. Explain the decisions before, during, and after the replacement.',
      checks: [
        'Confirm the exact asset, array/layout, service impact, degraded state, and health of all remaining members.',
        'Correlate the failed component to the exact slot and serial using the approved identification method; do not rely only on an activity LED.',
        'Verify the compatible replacement, support for the intended swap method, required approvals, and any recovery/data-protection prerequisites.',
        'Follow the prescribed replacement steps and watch recognition/rebuild or recovery state without assuming immediate restoration of redundancy.',
        'Verify service and array health, document serials/actions/results, and provide an explicit owner and handoff if recovery continues beyond the shift.'
      ],
      followups: ['What changes if a second member begins reporting errors?', 'Why is a hot spare not the same as a completed rebuild?', 'How would your answer change if the system does not use RAID?'],
      sample: 'I would first establish what “redundant” means for this layout and how much protection remains. I would check other members and confirm the failed slot and serial through the runbook. Before touching it, I would verify the approved replacement part and swap method; a tray alone does not prove hot-swap support. I would make the authorized replacement, confirm recognition, and monitor the prescribed recovery process and workload. A new disk appearing is not the finish line. If rebuild continues, my handoff would state progress, alerts to watch, next checks, and the responsible owner.'
    },
    {
      id: 's-05', category: 'cabling', title: 'A newly installed fiber link stays down',
      prompt: 'Two devices have been patched with duplex fiber, but neither end establishes link. Both devices are powered. Give a focused physical-layer investigation without guessing that the cable is defective.',
      checks: [
        'Confirm intended endpoints, port identities, administrative state, recent work, and whether the proposed test affects live service.',
        'Check supported transceiver/media pairing, speed, wavelength compatibility, distance/loss requirements, and connector type.',
        'Verify seating and appropriate transmit-to-receive polarity, and use the approved inspect-clean-inspect process when indicated.',
        'Use compatible known-good substitutions one variable at a time, with authorization; never look into a fiber or violate bend-radius/laser precautions.',
        'Verify link at both ends, relevant optical/counter evidence, and actual traffic; label/document the final path and any remaining issue.'
      ],
      followups: ['What if one endpoint is administratively disabled?', 'What can optical receive power help you distinguish, if diagnostics are available?', 'Why would changing several optics and cables together weaken the diagnosis?'],
      sample: 'I would confirm exactly which ports should connect and whether both are enabled. Then I would verify that the supported optics, fiber, speed, and reach are compatible. On a standard duplex path I would check transmit-to-receive polarity and seating. Inspection or cleaning would use the site tools and laser precautions, never eyesight into the connector. If needed, I would substitute one approved known-good component at a time and record the result. Success includes stable link, appropriate counters or optical diagnostics where available, and the intended traffic path working.'
    },
    {
      id: 's-06', category: 'cabling', title: 'Link is up, but traffic is unreliable',
      prompt: 'An interface remains connected, but users report intermittent loss. The receive CRC counter increased from 20 to 4,000 over a short observation interval. How do you investigate without treating every drop as the same problem?',
      checks: [
        'Confirm timing, affected traffic, scope, recent cable/optic/port work, and the counter baseline versus its rate of increase.',
        'Inspect corresponding counters and link events at both ends; distinguish CRC corruption from congestion/resource drops.',
        'Evaluate physical-path and hardware hypotheses using evidence, including relevant speed/duplex settings for that link type.',
        'Plan an approved, controlled test or compatible substitution that preserves service/redundancy and changes one variable at a time.',
        'Verify error rate and traffic after action over a meaningful interval, then document evidence rather than declaring an unproven root cause.'
      ],
      followups: ['Would a large historical counter with no recent increase mean the same thing?', 'What if CRC stops increasing but output drops rise under load?', 'What evidence would justify moving from cable to optic or port investigation?'],
      sample: 'The rising counter matters more than its absolute historical total. I would correlate it with traffic, loss, link events, and recent work, then compare both endpoints. CRC points toward frame corruption, while output drops might instead involve congestion; I would keep those hypotheses separate. I would choose a low-risk approved test of the physical path or hardware, using one controlled substitution at a time. After any change I would measure the new error trend and the application path under comparable conditions before concluding what was fixed.'
    },
    {
      id: 's-07', category: 'networking', title: 'The server cannot reach its gateway',
      prompt: 'A newly provisioned server has link, but attempts to reach its gateway fail. A neighboring server works. Explain what you would compare and how the result guides your next test.',
      checks: [
        'Confirm the intended asset, interface, gateway, addressing source, symptom, and whether an application test gives the same picture as ping.',
        'Inspect address/prefix, route selection, and neighbor state; explain why each item matters rather than listing commands only.',
        'Verify the intended VLAN and port mode/path and compare the working peer without copying configuration blindly.',
        'Consider competing causes such as incorrect prefix/gateway, VLAN mismatch, duplicate IP, or filtering; make only an authorized evidence-based change.',
        'Validate gateway and required remote service access, check for recurrence, and document the confirmed cause or unresolved hypothesis.'
      ],
      followups: ['What does an incomplete neighbor entry suggest, and what does it fail to prove?', 'Why does a link LED not clear Layer 2 configuration?', 'What if ICMP is blocked but the required TCP service works?'],
      sample: 'I would verify the intended interface and whether the gateway address is actually on-link for the configured prefix. On Linux, ip addr, ip route, and ip neigh give different parts of that picture. I would inspect the intended VLAN and port settings and compare a working peer, while preserving unique addresses. A failed ping alone is not the whole diagnosis; I would use the expected traffic and policy as context. I would test the most likely cause supported by these observations, obtain approval for correction, then verify both local next-hop and required service connectivity.'
    },
    {
      id: 's-08', category: 'networking', title: 'IP access works; the hostname fails',
      prompt: 'A user says an internal service responds when tested by IP but not by its normal hostname. Another host can use the name. Walk through a diagnosis that does not stop at “it is DNS.”',
      checks: [
        'Clarify the exact name, client, error, application/protocol, timing, and what the IP-based test actually exercised.',
        'Check the client name-service/resolver configuration and the exact name using suitable tools such as getent or dig.',
        'Compare returned records, expected address, and behavior from a working peer or appropriate resolver; consider cache/search-domain differences.',
        'Separate lookup failure or wrong records from connection, virtual-host, certificate, and application behavior; avoid indiscriminate configuration changes.',
        'Apply only the justified approved correction and verify the normal named service path, documenting evidence and any ongoing issue.'
      ],
      followups: ['What changes if the hostname resolves correctly but TLS reports a certificate mismatch?', 'Why can getent and dig return different results?', 'What would a stale cached answer look like compared with an unreachable resolver?'],
      sample: 'I would ask what “fails” means and verify the exact name and application. I would check the client resolver settings and compare a system lookup with direct DNS results where appropriate; getent can use name-service sources beyond DNS. Then I would compare the returned address and a working host. If resolution is correct, I would investigate the connection and hostname-dependent application or TLS behavior rather than blaming DNS. I would correct only the demonstrated fault and test the same named request the user needs.'
    },
    {
      id: 's-09', category: 'linux', title: 'Ping succeeds; SSH does not',
      prompt: 'A Linux server answers ping. An SSH attempt from your workstation fails. You have an approved alternate console. Describe how timeout, refusal, and authentication failure change the investigation.',
      checks: [
        'Confirm target, intended port, source, exact error, scope, and recent changes; do not treat ping as proof that TCP/SSH is healthy.',
        'Use the alternate path to inspect the actual SSH unit, time-relevant logs, and listener address/port.',
        'For timeout/refusal, investigate listener/bind, route and firewall/path evidence; avoid claiming either symptom proves one exact cause.',
        'For a reached authentication stage, examine the account/key and applicable policy without weakening authentication as a shortcut.',
        'Make an approved targeted fix, verify a new remote session and required access, preserve a recovery path, and document results.'
      ],
      followups: ['What if ss shows only 127.0.0.1:22?', 'Why can a firewall rejection resemble a closed port?', 'What would you check before restarting SSH on a remotely managed production host?'],
      sample: 'I would first identify whether the attempt times out, is explicitly refused, or reaches authentication. Those are different failure stages. From the approved console I would check service status, logs, and ss output for the actual listening address and port. A timeout can involve filtering, routing, or no response; refusal suggests rejection or no listener, but neither alone identifies the component. If authentication is reached, I would focus on the account, key, and policy. I would make a justified authorized change and verify a fresh remote session without losing the fallback access path.'
    },
    {
      id: 's-10', category: 'linux', title: 'A Linux workload becomes slow',
      prompt: 'An application owner reports a server is “really slow.” Load average is high, but CPU utilization is moderate. Explain an initial investigation and what would make you change direction.',
      checks: [
        'Define the affected operation, impact, baseline, timing, scope, and recent workload/configuration changes.',
        'Inspect CPU and process state while explaining that load includes runnable work and uninterruptible waits, not just CPU percentage.',
        'Check available memory, swap activity, storage capacity/I/O symptoms, and relevant logs rather than treating low free RAM as conclusive.',
        'Choose a hypothesis and a discriminating observation; avoid a speculative reboot, process kill, cache clearing, or unrelated tuning.',
        'Coordinate any remediation with the owner, measure application performance and resource trends afterward, and document or escalate clearly.'
      ],
      followups: ['How would active swap-in/out alter your hypothesis?', 'What if many tasks are waiting on I/O?', 'Why should you compare against the host’s normal workload and CPU count?'],
      sample: 'I would make “slow” measurable by identifying the operation and comparing it with a baseline. High load with moderate CPU can include waiting work, so I would inspect processes and their state rather than assuming more CPU is the answer. I would review available memory and swap activity, storage and I/O evidence, and the failure timeline. The next test should distinguish the strongest competing causes. Once evidence supports an action, I would coordinate it with the service owner and compare the original application symptom and resource trends afterward.'
    },
    {
      id: 's-11', category: 'linux', title: 'An application cannot write a file',
      prompt: 'An application fails when writing to its data directory. There appears to be free disk space. Explain the checks that separate capacity, access, and filesystem-state problems.',
      checks: [
        'Capture the exact error, path, process identity, affected mount, scope, and relevant recent changes.',
        'Check the correct filesystem for block and inode use and consider quota or deleted-open files where the evidence fits.',
        'Inspect ownership, mode/ACLs, parent-directory traversal, and applicable policy for the actual application account.',
        'Check mount state and logs for read-only or I/O errors; avoid blind deletion, chmod 777, formatting, or filesystem repair on assumptions.',
        'Use an authorized targeted correction, verify the intended application write safely, and document cause/evidence and any storage escalation.'
      ],
      followups: ['What does inode exhaustion look like?', 'How can deleting a large log fail to release space immediately?', 'Why can root writing a test file fail to prove the application account has access?'],
      sample: 'I would begin with the exact error and process account, then identify the real filesystem behind the path. I would compare block and inode availability and check limits such as quota if appropriate. For access errors, I would inspect ownership, permissions, ACLs, and parent traversal as the relevant account. A read-only remount or I/O error sends me toward filesystem and storage evidence. I would not delete arbitrary files or apply broad permissions. After a targeted authorized correction, I would verify the application’s actual write path and preserve logs for any underlying fault.'
    },
    {
      id: 's-12', category: 'operations', title: 'Alerts multiply during maintenance',
      prompt: 'You are halfway through an approved maintenance procedure when alerts appear on several systems beyond the planned scope. A teammate says to finish quickly because the window is almost over. How do you respond?',
      checks: [
        'Pause risky continuation, assess current safety and service impact, and confirm affected assets and timing.',
        'Preserve evidence and correlate the alerts with completed actions while distinguishing coincidence from a confirmed cause.',
        'Notify the incident/change owner promptly with facts and explain the concern to the teammate without assigning unsupported blame.',
        'Use the runbook stop conditions and approved rollback/escalation decision; do not improvise extra changes or automatically reverse unsafe steps.',
        'Verify recovery, provide customer/stakeholder updates and a clear handoff, and capture the lesson or procedural follow-up.'
      ],
      followups: ['What would your first status update contain?', 'What if the proposed rollback itself has significant risk?', 'Which parts of this example could demonstrate ownership and earning trust in a true behavioral story?'],
      sample: 'I would pause the next risky step and assess the affected scope rather than let the ending window force a guess. I would preserve the timeline and tell the change or incident owner what is observed, what I completed, and what remains uncertain. I would explain to my teammate that the unexpected impact meets the need for reassessment. The runbook and authorized owner determine whether rollback, containment, or escalation is safest. I would keep updates factual, verify the recovered service, and leave a clear record of actions, results, and any follow-up prevention work.'
    }
  ]
};
