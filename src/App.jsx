
import styles from'./App.module.css'
import Navbar from './components/Navbar'
import Intro from './components/MainIntro/Intro'
import Experience from './components/experience/Experience'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className={styles.App}>
        <Navbar />
        <main>
          <Intro />
          <Experience />
          <Project />
        </main>
        <Contact />
    </div>
  )
}

export default App
