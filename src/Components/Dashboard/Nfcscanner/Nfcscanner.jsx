import React, { useState, useEffect } from 'react';
import { Server, Wifi, WifiOff, Computer } from 'lucide-react';
import styles from './Nfcscanner.module.css';

const NFCScanner = () => {
  const [scanners, setScanners] = useState([
    { id: 'Scanner-001', name: 'Scanner-001', active: true, lastPing: new Date(), ipAddress: '192.168.1.101' },
    { id: 'Scanner-002', name: 'Scanner-002', active: false, lastPing: new Date(), ipAddress: '192.168.1.102' },
    { id: 'Scanner-003', name: 'Scanner-003', active: true, lastPing: new Date(), ipAddress: '192.168.1.103' },
    { id: 'Scanner-004', name: 'Scanner-004', active: true, lastPing: new Date(), ipAddress: '192.168.1.104' },
    { id: 'Scanner-005', name: 'Scanner-005', active: false, lastPing: new Date(), ipAddress: '192.168.1.105' },
    { id: 'Scanner-006', name: 'Scanner-006', active: true, lastPing: new Date(), ipAddress: '192.168.1.106' },
    { id: 'Scanner-007', name: 'Scanner-007', active: true, lastPing: new Date(), ipAddress: '192.168.1.107' },
    { id: 'Scanner-008', name: 'Scanner-008', active: false, lastPing: new Date(), ipAddress: '192.168.1.108' },
    { id: 'Scanner-009', name: 'Scanner-009', active: true, lastPing: new Date(), ipAddress: '192.168.1.109' },
    { id: 'Scanner-010', name: 'Scanner-010', active: true, lastPing: new Date(), ipAddress: '192.168.1.110' }
  ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setScanners(prev => prev.map(scanner => ({
//         ...scanner,
//         active: Math.random() > 0.3,
//         lastPing: scanner.active ? new Date() : scanner.lastPing
//       })));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className={styles.nfc_container}>
      <div className={styles.network_header}>
        <h1>NFC Scanner Network Status</h1>
        <div className={styles.network_stats}>
          <div className={styles.stat_card}>
            <h3>Active Scanners</h3>
            <span className={`${styles.stat_value} ${styles.active}`}>
                {scanners.filter(s => s.active).length}
            </span>
          </div>
          <div className={styles.stat_card}>
            <h3>Total Scanners</h3>
            <span className={styles.stat_value}>{scanners.length}</span>
          </div>
          <div className={styles.stat_card}>
            <h3>Network Status</h3>
            <span className={`${styles.stat_value} ${styles.online}`}>Online</span>
          </div>
        </div>
      </div>

      <div className={styles.server_section}>
        <div className={styles.server_icon}>
          <Server size={48} />
          <span>Web Server</span>
          <span className={styles.server_status}>Online</span>
          {/* <span className={styles.server_ip}>192.168.1.100</span> */}
        </div>
      </div>

      <div className={styles.connection_lines}></div>

      <div className={styles.scanners_grid}>
        {scanners.map((scanner) => (
          <div key={scanner.id} className={`${styles.scanner_card} ${scanner.active ? 'active' : 'inactive'}`}>
            <div className={styles.scanner_icon}>
              <Computer size={32} />
              {scanner.active ? (
                <Wifi className={`${styles.status_icon} ${styles.active}`} size={16} />
              ) : (
                <WifiOff className={`${styles.status_icon} ${styles.inactive}`} size={16} />
              )}
            </div>
            <div className={styles.scanner_info}>
              <h3>{scanner.name}</h3>
              <p className={styles.scanner_id}>{scanner.id}</p>
              {/* <p className={styles.scanner_ip}>{scanner.ipAddress}</p> */}
              <p className={`${styles.scanner_status} ${scanner.active ? 'active' : 'inactive'}`}>
                {scanner.active ? 'Active' : 'Inactive'}
              </p>
              {/* <p className={styles.last_ping}>
                Last Ping: {scanner.lastPing.toLocaleTimeString()}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFCScanner;