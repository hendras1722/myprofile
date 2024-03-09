import { useState, useEffect, useRef, Fragment } from 'react'
import { Typed } from 'typed.ts'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import DuarrGif from '../assets/duarr.gif'
import IconPrivy from '../assets/privy.svg'
import IconGithub from '../assets/github.svg'
import IconInstagram from '../assets/instagram.svg'
import IconLinkedin from '../assets/linkedin.svg'

// Generated by https://quicktype.io

export interface IHTMLTerimnal {
  item: Item
  index: number
}

export interface Item {
  html: string
  created_at: string
}

function App() {
  const [codeStatus, setCodeStatus] = useState<boolean>()
  const container_typing = document.getElementById('container_typing')

  const el = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const secondDate =
    new Date().getSeconds() <= 9
      ? '0' + new Date().getSeconds()
      : '' + new Date().getSeconds()
  const minuteDate =
    new Date().getMinutes() <= 9
      ? '0' + new Date().getMinutes()
      : '' + new Date().getMinutes()
  const hourDate =
    new Date().getHours() <= 9
      ? '0' + new Date().getHours()
      : '' + new Date().getHours()
  const [dataTerminal, setDataTerminal] = useState([
    {
      html: 'text',
      created_at: hourDate + ':' + minuteDate + ':' + secondDate,
    },
  ])

  const handleNext = () => {
    onOpen()
    sessionStorage.setItem('poor', 'true')
    setTimeout(() => {
      onClose()
      navigate('/me')
    }, 1500)
  }

  useEffect(() => {
    const typing_text = document.getElementById(`typing_text0`)
    if (typing_text) typing_text.focus()
    const container_typing = document.getElementById('container_typing')
    const second =
      new Date().getSeconds() <= 9
        ? '0' + new Date().getSeconds()
        : '' + new Date().getSeconds()
    const minute =
      new Date().getMinutes() <= 9
        ? '0' + new Date().getMinutes()
        : '' + new Date().getMinutes()
    const hour =
      new Date().getHours() <= 9
        ? '0' + new Date().getHours()
        : '' + new Date().getHours()
    const typeTexts = (e: string, value?: string) => {
      const typed = new Typed({
        callback: (text) => {
          if (el.current) {
            el.current.innerHTML = text
          }
        },
      })
      const type = async () => {
        let line1 = ''
        let line2 = ''
        let line3 = ''
        let line4 = ''
        let line5 = ''
        let randomValue = undefined
        const a = [true, false]
        if (e.includes('npm')) {
          if (e.includes('npm list')) {
            line1 = `msa: what do you mean ${value}?\n`
            line2 = ''
            line3 = ''
            line4 = ''
            line5 = ``
          } else if (e.includes('npm not')) {
            line1 = `msa: package ${value} not registered\n`
            line2 = ''
            line3 = ''
            line4 = ''
            line5 = ``
          } else {
            randomValue = a[Math.floor(a.length * Math.random())]
            line1 = 'npm install MSA\n'
            line2 = 'Installing components...\n'
            line3 = 'Fetching from source...\n'
            line4 = 'Success 200 🤪\n'
            line5 = `Failed 403 😭\n`
          }
        }
        if (e === 'msa name') {
          line1 = 'My Name is Muh Syahendra A'
          line2 = ''
          line3 = ''
          line4 = ''
          line5 = ``
        }
        if (e === 'mount 1') {
          line1 = 'Instruction:\n'
          line2 =
            '\t\t npm install msa => for get my profile\n \t\tname or my name => for get my name\n \t\tclear => for clear text'
          line3 = ''
          line4 = ''
          line5 = ``
        }
        if (e === 'mount') {
          line1 = 'Welcome to juggle. for help command you can typing msa\n'
          line2 = ''
          line3 = ''
          line4 = ''
          line5 = ``
        }
        const birtday = new Date('1996-12-22')
        const today = new Date()

        const ageMilisecond = Number(today) - Number(birtday)
        const ageYears = Math.floor(
          ageMilisecond / (1000 * 60 * 60 * 24 * 365.25)
        )

        if (e === 'msa age') {
          line1 = ageYears + ' ' + 'years old'
          line2 = ''
          line3 = ''
          line4 = ''
          line5 = ``
        }
        if (e === 'not found') {
          line1 = 'msa: command not found'
          line2 = ''
          line3 = ''
          line4 = ''
          line5 = ``
        }

        if (line1) {
          typed.type(line1, {
            errorMultiplier: 0,
            className:
              ((e.includes('npm not') || e.includes('mount')) &&
                'text-sm italic') ||
              '',
          })
          typed.wait(1500)
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: container_typing.scrollHeight,
              behavior: 'smooth',
            })
        }
        if (line2) {
          typed.type(line2, {
            errorMultiplier: 0,
            className: (e.includes('mount') && 'text-sm italic') || '',
          })
          typed.wait(1500)
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: container_typing.scrollHeight,
              behavior: 'smooth',
            })
        }
        if (line3) {
          typed.type(line3, { errorMultiplier: 0 })
          typed.wait(1500)
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: container_typing.scrollHeight,
              behavior: 'smooth',
            })
        }
        if (randomValue) {
          if (line4) {
            typed.type(line4, {
              errorMultiplier: 0,
              className: 'successTyped',
            })
            typed.wait(1500)
            if (container_typing)
              container_typing.scrollTo({
                left: 0,
                top: container_typing.scrollHeight,
                behavior: 'smooth',
              })

            typed.type('====================\n', { errorMultiplier: 0 })
            typed.wait(1000)
            if (container_typing)
              container_typing.scrollTo({
                left: 0,
                top: container_typing.scrollHeight,
                behavior: 'smooth',
              })

            typed.type('MSA Begin\n', {
              errorMultiplier: 0,
              className: 'fontWeight',
            })
            typed.wait(1000)
            typed.type('====================\n', { errorMultiplier: 0 })
            if (container_typing)
              container_typing.scrollTo({
                left: 0,
                top: container_typing.scrollHeight,
                behavior: 'smooth',
              })

            typed.wait(1000)
            if (container_typing)
              container_typing.scrollTo({
                left: 0,
                top: container_typing.scrollHeight,
                behavior: 'smooth',
              })
          }
        } else {
          if (line5) {
            typed.type(line5, {
              errorMultiplier: 0,
              noSpecialCharErrors: true,
              className: 'errorTyped',
            })
            typed.wait(3000)
            if (container_typing)
              container_typing.scrollTo({
                left: 0,
                top: container_typing.scrollHeight,
                behavior: 'smooth',
              })

            typed.type('====================\n', { errorMultiplier: 0 })
            typed.wait(1000)
            if (container_typing)
              container_typing.scrollTo({
                left: 0,
                top: container_typing.scrollHeight,
                behavior: 'smooth',
              })

            typed.type('Oh no, please try again...\n', {
              errorMultiplier: 0,
              className: 'fontWeight',
            })
            typed.wait(1000)
            if (container_typing)
              container_typing.scrollTo({
                left: 0,
                top: container_typing.scrollHeight,
                behavior: 'smooth',
              })

            typed.type('====================\n', { errorMultiplier: 0 })
            typed.wait(1000)
          }
        }
        await typed.run()
        setDataTerminal((prev) => [
          ...prev,
          {
            html: 'input',
            created_at: hour + ':' + minute + ':' + second,
          },
        ])

        if (container_typing)
          container_typing.scrollTo({
            left: 0,
            top: container_typing.scrollHeight,
            behavior: 'smooth',
          })

        setCodeStatus(randomValue)
      }
      type()
    }
    typeTexts('mount')
    sessionStorage.removeItem('poor')
  }, [])

  // const handleRetry = () => {
  //   window.location.reload();
  // };

  const typeText = (e: string, value?: string) => {
    const typed = new Typed({
      callback: (text) => {
        if (el.current) {
          el.current.innerHTML = text
        }
      },
    })
    const type = async () => {
      let line1 = ''
      let line2 = ''
      let line3 = ''
      let line4 = ''
      let line5 = ''
      let randomValue = undefined
      const a = [true, false]
      if (e === 'msa') {
        line1 = 'usage: <_optional_> msa <_command_>\n'
        line2 =
          'where <_command_> is one of: \n\t name, age, clear, phone, email, marry\n'
        line3 = 'where <_optional_> is: \n\t npm i or npm install'
        line4 = ''
        line5 = ``
      }
      if (e.includes('npm')) {
        if (e.includes('npm list')) {
          line1 = `msa: what do you mean ${value}?\n`
          line2 = ''
          line3 = ''
          line4 = ''
          line5 = ``
        } else if (e.includes('npm not')) {
          line1 = `msa: package ${value} not registered\n`
          line2 = ''
          line3 = ''
          line4 = ''
          line5 = ``
        } else {
          randomValue = a[Math.floor(a.length * Math.random())]
          line1 = 'npm install MSA\n'
          line2 = 'Installing components...\n'
          line3 = 'Fetching from source...\n'
          line4 = 'Success 200 🤪\n'
          line5 = `Failed 403 😭\n`
        }
      }
      if (e === 'msa name') {
        line1 = 'My Name is Muh Syahendra A'
        line2 = ''
        line3 = ''
        line4 = ''
        line5 = ``
      }
      if (e === 'mount') {
        line1 = 'Instruction:\n'
        line2 =
          '\t\t npm install msa => for get my profile\n \t\tname or my name => for get my name\n \t\tclear => for clear text'
        line3 = ''
        line4 = ''
        line5 = ``
      }

      if (e === 'text empty') {
        line1 = '     '
        line2 = ''
        line3 = ''
        line4 = ''
        line5 = ``
      }
      const birtday = new Date('1996-12-22')
      const today = new Date()

      const ageMilisecond = Number(today) - Number(birtday)
      const ageYears = Math.floor(
        ageMilisecond / (1000 * 60 * 60 * 24 * 365.25)
      )

      if (e === 'msa age') {
        line1 = ageYears + ' ' + 'years old'
        line2 = ''
        line3 = ''
        line4 = ''
        line5 = ``
      }
      if (e === 'not found') {
        line1 = 'msa: command not found'
        line2 = ''
        line3 = ''
        line4 = ''
        line5 = ``
      }

      if (line1) {
        typed.type(line1, {
          errorMultiplier: 0,
          className:
            ((e.includes('npm not') || e.includes('mount')) &&
              'text-sm italic') ||
            '',
        })
        if (e === 'text empty') {
          typed.wait(2)
        } else {
          typed.wait(1500)
        }
        if (container_typing)
          container_typing.scrollTo({
            left: 0,
            top: container_typing.scrollHeight,
            behavior: 'smooth',
          })
      }
      if (line2) {
        typed.type(line2, {
          errorMultiplier: 0,
          className: (e.includes('mount') && 'text-sm italic') || '',
        })
        typed.wait(1500)
        if (container_typing)
          container_typing.scrollTo({
            left: 0,
            top: container_typing.scrollHeight,
            behavior: 'smooth',
          })
      }
      if (line3) {
        typed.type(line3, { errorMultiplier: 0 })
        typed.wait(1500)
        if (container_typing)
          container_typing.scrollTo({
            left: 0,
            top: container_typing.scrollHeight,
            behavior: 'smooth',
          })
      }
      if (randomValue) {
        if (line4) {
          typed.type(line4, { errorMultiplier: 0, className: 'successTyped' })
          typed.wait(1500)
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: container_typing.scrollHeight,
              behavior: 'smooth',
            })

          typed.type('====================\n', { errorMultiplier: 0 })
          typed.wait(1000)
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: container_typing.scrollHeight,
              behavior: 'smooth',
            })

          typed.type('MSA Begin\n', {
            errorMultiplier: 0,
            className: 'fontWeight',
          })
          typed.wait(1000)
          typed.type('====================\n', { errorMultiplier: 0 })
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: container_typing.scrollHeight,
              behavior: 'smooth',
            })

          typed.wait(1000)
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: container_typing.scrollHeight,
              behavior: 'smooth',
            })
        }
      } else {
        if (line5) {
          typed.type(line5, {
            errorMultiplier: 0,
            noSpecialCharErrors: true,
            className: 'errorTyped',
          })
          typed.wait(3000)
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: container_typing.scrollHeight,
              behavior: 'smooth',
            })

          typed.type('====================\n', { errorMultiplier: 0 })
          typed.wait(1000)
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: container_typing.scrollHeight,
              behavior: 'smooth',
            })

          typed.type('Oh no, please try again...\n', {
            errorMultiplier: 0,
            className: 'fontWeight',
          })
          typed.wait(1000)
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: container_typing.scrollHeight,
              behavior: 'smooth',
            })

          typed.type('====================\n', { errorMultiplier: 0 })
          typed.wait(1000)
        }
      }

      await typed.run()
      // console.log(
      //   typing_text,
      //   dataTerminal.length,
      //   document.getElementById(`typing_text` + dataTerminal.length),
      //   "inityping_text"
      // );
      const second =
        new Date().getSeconds() <= 9
          ? '0' + new Date().getSeconds()
          : '' + new Date().getSeconds()
      const minute =
        new Date().getMinutes() <= 9
          ? '0' + new Date().getMinutes()
          : '' + new Date().getMinutes()
      const hour =
        new Date().getHours() <= 9
          ? '0' + new Date().getHours()
          : '' + new Date().getHours()
      setDataTerminal((prev) => [
        ...prev,
        {
          html: 'input',
          created_at: hour + ':' + minute + ':' + second,
        },
      ])

      if (container_typing) {
        container_typing.scrollTo({
          left: 0,
          top: container_typing.scrollHeight,
          behavior: 'smooth',
        })
      }

      setCodeStatus(randomValue)
    }

    type()
  }

  const handleSubmit = (e: React.KeyboardEvent, props: IHTMLTerimnal) => {
    let value = null

    const typing_text = document.getElementById(`typing_text${props.index}`)
    value = typing_text?.innerText
    const second =
      new Date().getSeconds() <= 9
        ? '0' + new Date().getSeconds()
        : '' + new Date().getSeconds()
    const minute =
      new Date().getMinutes() <= 9
        ? '0' + new Date().getMinutes()
        : '' + new Date().getMinutes()
    const hour =
      new Date().getHours() <= 9
        ? '0' + new Date().getHours()
        : '' + new Date().getHours()

    const charCode = e.keyCode || e.which
    if (!typing_text) return
    if (charCode === 13 || e.key == 'Enter' || e.code == 'Enter') {
      container_typing?.scrollTo({
        left: 0,
        top: container_typing?.scrollHeight,
        behavior: 'smooth',
      })
      typing_text.blur()
      typing_text.setAttribute('contentEditable', 'false')
      console.log(hour + ':' + minute + ':' + second, 'ininwewe')
      if (!value) {
        setDataTerminal([
          ...dataTerminal,
          {
            html: 'input',
            created_at: hour + ':' + minute + ':' + second,
          },
        ])
        typing_text.focus()
        return
      }

      if (value.toLocaleLowerCase().includes('npm')) {
        if (value.toLocaleLowerCase().replace(/^\s{1,}/gm, '') === 'npm') {
          setDataTerminal([
            ...dataTerminal,
            {
              html: 'text',
              created_at: hour + ':' + minute + ':' + second,
            },
          ])
          typeText('npm list', "'npm i msa'")
          typing_text.focus()
          return
        }
        if (
          value.toLocaleLowerCase().replace(/^\s{1,}/gm, '') === 'npm i' ||
          value.toLocaleLowerCase().replace(/^\s{1,}/gm, '') ===
            'npm install' ||
          value.toLocaleLowerCase().replace(/^\s{1,}/gm, '') === 'npm i msa' ||
          value.toLocaleLowerCase().replace(/^\s{1,}/gm, '') ===
            'npm install msa'
        ) {
          setDataTerminal([
            ...dataTerminal,
            {
              html: 'text',
              created_at: hour + ':' + minute + ':' + second,
            },
          ])
          typeText('npm')
          typing_text.focus()

          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: container_typing.scrollHeight,
              behavior: 'smooth',
            })
        } else {
          const textsplit = value.toLocaleLowerCase().split(' ')
          setDataTerminal([
            ...dataTerminal,
            {
              html: 'text',
              created_at: hour + ':' + minute + ':' + second,
            },
          ])
          typeText('npm not', textsplit[textsplit.length - 1])
          typing_text.focus()
        }
        return
      }
      if (
        value
          .toLocaleLowerCase()
          .replace(/^\s{1,}/gm, '')
          .includes('msa name') ||
        value
          ?.toLocaleLowerCase()
          .replace(/^\s{1,}/gm, '')
          .includes('my name')
      ) {
        setDataTerminal([
          ...dataTerminal,
          {
            html: 'text',
            created_at: hour + ':' + minute + ':' + second,
          },
        ])
        typeText('msa name')
        return
      }
      if (
        value
          .toLocaleLowerCase()
          .replace(/^\s{1,}/gm, '')
          .includes('umur') ||
        value
          .toLocaleLowerCase()
          .replace(/^\s{1,}/gm, '')
          .includes('msa age')
      ) {
        setDataTerminal([
          ...dataTerminal,
          {
            html: 'text',
            created_at: hour + ':' + minute + ':' + second,
          },
        ])
        typeText('msa age')
        return
      }
      if (
        value
          .toLocaleLowerCase()
          .replace(/^\s{1,}/gm, '')
          .includes('msa clear')
      ) {
        setDataTerminal([
          {
            html: 'input',
            created_at: hour + ':' + minute + ':' + second,
          },
        ])
        return
      }

      if (value.toLocaleLowerCase().replace(/^\s{1,}/gm, '') === '') {
        setDataTerminal([
          ...dataTerminal,
          {
            html: 'input',
            created_at: hour + ':' + minute + ':' + second,
          },
        ])
        return
      }

      if (value.toLocaleLowerCase().replace(/^\s{1,}/gm, '') === 'msa') {
        setDataTerminal([
          ...dataTerminal,
          {
            html: 'text',
            created_at: hour + ':' + minute + ':' + second,
          },
        ])
        typeText('msa')
        return
      }

      // if (el.current) el.current.innerHTML = "command not found";
      setDataTerminal([
        ...dataTerminal,
        {
          html: 'text',
          created_at: hour + ':' + minute + ':' + second,
        },
      ])
      typeText('not found')
    }
  }
  function handleMouseEvent(e?: number) {
    const typing_text = document.getElementById(
      `typing_text${e ? e : dataTerminal.length - 1}`
    )
    const container_typing = document.getElementById('container_typing')

    if (!typing_text) return
    if (container_typing) {
      typing_text.focus()
    }
    if (typing_text) {
      typing_text.focus()
    }
    return
  }
  const HtmlTerminal = (props: IHTMLTerimnal) => {
    if (!props) return 'wewe'
    if (props.item.html === 'input') {
      return (
        <>
          <div className="flex items-center ">
            <div>
              <span
                className="text-white text-sm flex items-center fontTerminal"
                style={{ width: '76px' }}
              >
                {props.item.created_at} =&#62; $
              </span>
            </div>
            <div className="text-white">
              <div className="break-words">
                <div
                  id={'typing_text' + props.index}
                  contentEditable
                  className="no-underline text-white focus:outline-none fontTerminal"
                  onKeyDown={(event) => handleSubmit(event, props)}
                  onMouseDown={() => handleMouseEvent(props.index)}
                ></div>
              </div>
            </div>
          </div>
        </>
      )
    }
    if (props.item.html === 'text') {
      return (
        <div
          style={{
            whiteSpace: 'pre',
          }}
          className="text-white"
        >
          <span ref={el} className="fontTerminal" />
        </div>
      )
    }
    return 'hello'
  }

  return (
    <Fragment>
      <div className="md:p-20 p-5">
        <div className="mb-8">
          <h1 className="md:text-5xl text-2xl font-extrabold">
            Muh Syahendra A
          </h1>
        </div>
        <Alert status="warning" className="mb-5 rounded">
          <AlertIcon />
          This website is no longer under development and will redirect to this{' '}
          <span className="ml-3 text-blue-500 font-bold">
            <a href="https://msame.vercel.app">link</a>
          </span>
        </Alert>
        <article>
          <p>
            Hi, I am Muhammad Syahendra Anindyantoro. The Man Behind The
            Keyboard.
          </p>
          <p className="flex">
            Working at{' '}
            <span className="mx-1">
              <img width="20" height="20" src={IconPrivy}></img>
            </span>{' '}
            Privy
          </p>
          <p>Being a developer is my pride and joy.</p>
          <hr className="w-5" />
          <p className="mt-5">Find me on</p>
          <p className="my-2 flex gap-3">
            <a
              className="border-b-2 border-b-gray-50 process flex hover:border-b-black w-fit"
              href="https://github.com/hendras1722"
              target="_blank"
            >
              <span>
                {' '}
                <img src={IconGithub} width={20} className="mr-1" />{' '}
              </span>{' '}
              GitHub
            </a>
            <a
              className="border-b-2 border-b-gray-50 process flex hover:border-b-black w-fit"
              href="https://www.instagram.com/msyaa240"
              target="_blank"
            >
              <span>
                <img src={IconInstagram} width={20} className="mr-1" />{' '}
              </span>{' '}
              Instagram
            </a>
            <a
              className="border-b-2 border-b-gray-50 process flex hover:border-b-black w-fit"
              href="https://www.linkedin.com/in/muhsyahendraa/"
              target="_blank"
            >
              <span>
                {' '}
                <img src={IconLinkedin} width={20} className="mr-1" />{' '}
              </span>{' '}
              Linkedin
            </a>
          </p>
        </article>
        <hr className=" h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700" />
        <div className="bg-blue-900 h-12 flex justify-end p-2 items-center">
          <div className="w-20 flex justify-between">
            <div className="bg-red-100 h-5 w-5 rounded-xl button_terminal"></div>
            <div className="bg-red-100 h-5 w-5 rounded-xl button_terminal"></div>
            <div className="bg-red-100 h-5 w-5 rounded-xl button_terminal"></div>
          </div>
        </div>
        <div
          className="bg-black h-96 p-2 items-center h-9/6 overflow-auto py-3 rounded-bl-2xl rounded-br-2xl overflow-x-hidden"
          id="container_typing"
          onClick={() => handleMouseEvent()}
        >
          {}
          {dataTerminal.map((item, index) => (
            <div key={index}>{HtmlTerminal({ item, index })}</div>
          ))}
        </div>

        <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
          <ModalContent className="modalContent">
            <ModalBody className="modalBodyCustom">
              <img src={DuarrGif} style={{ width: '50%' }} />
            </ModalBody>
          </ModalContent>
        </Modal>

        {codeStatus && (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 20,
              }}
            >
              <Button onClick={handleNext} colorScheme="blue">
                Lanjutkan
              </Button>
            </div>
          </>
        )}
        {codeStatus === false && (
          <>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <p>
                <q
                  style={{
                    fontWeight: 'bold',
                    color: '#7d7d7d',
                    fontStyle: 'italic',
                  }}
                >
                  Masih gagal tetap lah mencoba kesempatan tidak akan datang
                  untuk orang yang tidak ingin mencoba
                </q>
              </p>
            </div>
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Button onClick={handleRetry} colorScheme="red">
                Retry
              </Button>
            </div> */}
            <div className="text-center">
              Sudah menyerah ?{' '}
              <a
                href="javascript:void(0)"
                onClick={handleNext}
                className="text-blue-700"
                font-bold
              >
                {' '}
                klik disini
              </a>
            </div>
          </>
        )}
      </div>
    </Fragment>
  )
}

export default App
