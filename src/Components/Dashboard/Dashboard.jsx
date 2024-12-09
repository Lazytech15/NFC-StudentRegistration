import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from './Dashboard.module.css';

function Dashboard() {
  const location = useLocation();
  const isRootPath = location.pathname === '/dashboard' || location.pathname === '/';

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        {isRootPath ? (
          <div className={styles.welcomeContainer}>
            <h1 className={styles.welcomeTitle}>Welcome to Your Dashboard</h1>
            <p className={styles.welcomeText}>Select an option from the sidebar to get started</p>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}

export default Dashboard;