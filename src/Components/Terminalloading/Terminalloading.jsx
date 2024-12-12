import React, { useState, useEffect } from 'react';
import styles from './Terminalloading.module.css';

const TerminalLoading = ({ 
  isLoading = false,
  steps = [],
  email = '',
  title = 'user@icct_verified:~',
  processingText = 'Processing...',
  processDelay = 300,
  stepDelay = 500,
  connectionTimeout = 10000 // 10 seconds default timeout
}) => {
  const [logs, setLogs] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [connectionStatus, setConnectionStatus] = useState('checking');

  const getObfuscatedEmail = (email) => {
    if (!email) return '*****@****.com';
    const [username, domain] = email.split('@');
    const obfuscatedUsername = username.charAt(0) + '*'.repeat(username.length - 2) + username.charAt(username.length - 1);
    const [domainName, tld] = domain.split('.');
    const obfuscatedDomain = domainName.charAt(0) + '*'.repeat(domainName.length - 1);
    return `${obfuscatedUsername}@${obfuscatedDomain}.${tld}`;
  };

  const checkInternetConnection = () => {
    return new Promise((resolve) => {
      if (!isLoading) {
        resolve(false);
        return;
      }

      const checkConnection = () => {
        if (navigator.onLine) {
          fetch('https://www.google.com', { 
            mode: 'no-cors', 
            cache: 'no-store' 
          })
            .then(() => resolve(true))
            .catch(() => resolve(false));
        } else {
          resolve(false);
        }
      };

      checkConnection();
    });
  };

  useEffect(() => {
    if (!isLoading) {
      setLogs([]);
      setCurrentStep(0);
      setConnectionStatus('checking');
      return;
    }

    let currentLog = [];
    let step = 0;
    let isMounted = true;
    let connectionCheckTimeout;

    const startConnectionCheck = () => {
      connectionCheckTimeout = setTimeout(() => {
        if (isMounted) {
          setConnectionStatus('slow');
        }
      }, connectionTimeout);

      checkInternetConnection().then((hasConnection) => {
        clearTimeout(connectionCheckTimeout);
        if (isMounted) {
          setConnectionStatus(hasConnection ? 'connected' : 'disconnected');
          
          if (hasConnection) {
            processStep();
          }
        }
      });
    };

    const processStep = () => {
      if (!isMounted || step >= steps.length) return;

      const currentStep = steps[step];
      const command = typeof currentStep.command === 'function' 
        ? currentStep.command({ email: getObfuscatedEmail(email) })
        : currentStep.command;

      currentLog = [...currentLog, { type: 'command', text: command }];
      setLogs([...currentLog]);

      let outputIndex = 0;
      const processOutput = () => {
        if (!isMounted || outputIndex >= currentStep.output.length) return;

        const output = typeof currentStep.output[outputIndex] === 'function'
          ? currentStep.output[outputIndex]({ email: getObfuscatedEmail(email) })
          : currentStep.output[outputIndex];

        const isSuccess = output.startsWith('✓');
        const isError = output.startsWith('✗');
        
        currentLog = [...currentLog, { 
          type: 'output', 
          text: output,
          status: isSuccess ? `${styles.success}` : isError ? 'error' : 'normal'
        }];
        setLogs([...currentLog]);
        outputIndex++;

        if (outputIndex < currentStep.output.length) {
          setTimeout(processOutput, processDelay);
        } else {
          step++;
          setCurrentStep(step);
          if (step < steps.length) {
            setTimeout(processStep, stepDelay);
          }
        }
      };

      setTimeout(processOutput, processDelay);
    };

    startConnectionCheck();

    return () => {
      isMounted = false;
      clearTimeout(connectionCheckTimeout);
    };
  }, [isLoading, email, steps, processDelay, stepDelay, connectionTimeout]);

  if (!isLoading) return null;

  const renderConnectionStatus = () => {
    switch (connectionStatus) {
      case 'checking':
        return (
          <div className={styles.connection_status}>
            <span className={styles.cursor}></span>
            <span>Checking internet connection...</span>
          </div>
        );
      case 'slow':
        return (
          <div className={styles.connection_status}>
            <span className={`${styles.cursor} ${styles.warning}`}></span>
            <span>Internet connection seems slow. Please wait...</span>
          </div>
        );
      case 'disconnected':
        return (
          <div className={styles.connection_status}>
            <span className={`${styles.cursor} ${styles.error}`}></span>
            <span>No internet connection. Please check your network.</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.terminal_overlay}>
      <div className={styles.terminal_window}>
        <div className={styles.terminal_header}>
          <div className={styles.terminal_dots}>
            <div className={`${styles.terminal_dot} ${styles.dot_close}`}></div>
            <div className={`${styles.terminal_dot} ${styles.dot_minimize}`}></div>
            <div className={`${styles.terminal_dot} ${styles.dot_maximize}`}></div>
          </div>
          <div className="terminal-title">{title}</div>
        </div>
        
        <div className="terminal-content">
          {renderConnectionStatus()}
          {connectionStatus === 'connected' && (
            <>
              {logs.map((log, index) => (
                <div key={index}>
                  {log.type === 'command' ? (
                    <div className={styles.command_line}>
                      <div className={styles.prompt}>
                        <span className={styles.prompt_user}>user</span>
                        <span className={styles.prompt_at}>@</span>
                        <span className={styles.prompt_host}>ubuntu</span>
                        <span className={styles.prompt_path}>:~</span>
                        <span className={styles.prompt_symbol}>$</span>
                      </div>
                      <span className={styles.command}>{log.text}</span>
                    </div>
                  ) : (
                    <div className={`${styles.output} ${log.status}`}>{log.text}</div>
                  )}
                </div>
              ))}
              {currentStep < steps.length && (
                <div className={styles.processing}>
                  <span className={styles.cursor}></span>
                  <span className={styles.processing_text}>{processingText}</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalLoading;