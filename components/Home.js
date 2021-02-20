// import Link from 'next/link'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../components/Home.module.css'

const signup = async email => {
  await window.fetch('https://api.kubesail.com/pibox/signup', {
    headers: { 'content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ email, channel: 'pibox.io' }),
  })
  window.location = '/prefs'
}

const models = {
  default: '/images/pibox-2-mini-render.png',
  box2mini: '/images/pibox-2-mini-render.png',
  box2: '/images/pibox-2-mini-render.png',
  box5mini: '/images/pibox-2-mini-render.png',
  box5: '/images/pibox-2-mini-render.png',
}

const Home = () => {
  const [email, setEmail] = useState('')
  const [model, setModel] = useState('default')

  useEffect(() => {
    email && window.localStorage.setItem('email', email)
  }, [email])

  return (
    <div>
      <div className={styles.Product}>
        <div className={[styles.SectionInner]}>
          <div className={styles.ProductContent}>
            <div className={styles.ProductHero}>
              <img className={styles.ProductImage} src={models[model]} alt="PiBox Render" />
              <div className={styles.tagline}>An ultra modular two or five bay NAS</div>
              <div className={styles.divider}></div>
              <div className={styles.ProductBar}>
                <div className={styles.productGroup}>
                  <div
                    className={[
                      styles.ProductTab,
                      styles.pinkTab,
                      model === 'box2' && styles.ProductTabSelected,
                    ].join(' ')}
                    onClick={() => setModel('box2')}
                  >
                    Box <span className={styles.colorPink}>2</span>
                  </div>
                  <div
                    className={[
                      styles.ProductTab,
                      styles.pinkTab,
                      model === 'box2mini' && styles.ProductTabSelected,
                    ].join(' ')}
                    onClick={() => setModel('box2mini')}
                  >
                    Box{' '}
                    <span className={styles.colorPink}>
                      2 <span className={styles.mini}>mini</span>
                    </span>
                  </div>
                </div>
                <div className={[styles.productGroup, styles.five].join(' ')}>
                  <div
                    className={[
                      styles.ProductTab,
                      styles.blueTab,
                      model === 'box5' && styles.ProductTabSelected,
                    ].join(' ')}
                    onClick={() => setModel('box5')}
                  >
                    Box <span className={styles.colorBlue}>5</span>
                  </div>
                  <div
                    className={[
                      styles.ProductTab,
                      styles.blueTab,
                      model === 'box5mini' && styles.ProductTabSelected,
                    ].join(' ')}
                    onClick={() => setModel('box5mini')}
                  >
                    Box{' '}
                    <span className={styles.colorBlue}>
                      5 <span className={styles.mini}>mini</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ProductContentContainer}>
              <h2 className={styles.HeroHeader}>Extra storage in a snap</h2>
              <div className={styles.ProductFeatureText}>
                <span> Just add:</span>
                <ul className={styles.ul}>
                  <li>
                    Any{' '}
                    <a
                      href="https://www.raspberrypi.org/products/compute-module-4/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Raspberry Pi CM4
                    </a>
                  </li>
                  <li>A few hard drives</li>
                  <li>Any pi supported OS</li>
                </ul>{' '}
                <span>
                  and get the most versatile NAS <span className={styles.italics}>ever</span>.
                </span>
              </div>
              <form
                onSubmit={e => {
                  e.preventDefault()
                  signup(email)
                }}
              >
                <input
                  className={styles.EmailInput}
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
                <input type="submit" value="Notify Me"></input>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.Section}>
          <div className={[styles.SectionInner, styles.SectionReverse].join(' ')}>
            <div className={styles.SectionCopy}>
              <h3>Operating Systems You Know and Love</h3>
              <div className={[styles.IconContainer, styles.IconsOS].join(' ')}>
                <img
                  className={styles.Icons}
                  src="/images/ubuntu.png"
                  alt="Ubuntu"
                  style={{ marginRight: 30 }}
                />
                <img className={styles.Icons} src="/images/raspberry.png" alt="Raspberry Pi" />
              </div>
              <p className={styles.SectionText}>
                Finally, a NAS that lets you use a standard operating system that you’re used to,
                like Ubuntu or Raspberry Pi OS.
              </p>
            </div>
            <img className={styles.SectionImg} src="/images/gorilla.png" alt="Image of Desktop" />
          </div>
        </div>

        <div className={styles.Section}>
          <div className={styles.SectionInner}>
            <img className={styles.SectionImg} src="/images/lion.png" alt="Image of media" />
            <div className={styles.SectionCopy}>
              <h3>HDMI for Media</h3>
              <div className={[styles.IconContainer, styles.IconsHDMI].join(' ')}>
                <img className={styles.Icons} src="/images/hdmi.png" alt="HDMI Icon" />
              </div>
              <p className={styles.SectionText}>
                The PiBox makes a great media center, taking advantage of the Raspberry Pi’s native
                4K video decoder.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.Section}>
          <div className={[styles.SectionInner, styles.SectionReverse].join(' ')}>
            <div className={styles.SectionCopy}>
              <h3>It’s time to ditch Dropbox, Google Photos, and Netflix</h3>

              <div className={[styles.IconContainer, styles.IconsDitch].join(' ')}>
                <img className={styles.Icons} src="/images/ditch-icons.png" alt="Icon of HDMI" />
              </div>
              <p className={styles.SectionText}>
                The PiBox is ready to run a variety of free software.{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://kubesail.com/templates/">
                  Templates
                </a>{' '}
                let you spin up self-hosted apps with one click.
              </p>
            </div>
            <img className={styles.SectionImg} src="/images/nextcloud.png" alt="Image of media" />
          </div>
        </div>

        <div className={styles.CTA}>
          <form
            onSubmit={e => {
              e.preventDefault()
              signup(email)
            }}
          >
            <input
              className={[styles.EmailInput, styles.EmailInputBottom].join(' ')}
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <input style={{ maxWidth: 800 }} type="submit" value="Sign Up &amp; Customize" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
