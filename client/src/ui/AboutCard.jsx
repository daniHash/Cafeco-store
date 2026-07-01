// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const AboutCard = ({ developer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="about-card md:h[600px] mt-20 h-auto w-full border-2 border-black/2 bg-white/2 px-10 py-12 shadow-form backdrop-blur-xl lg:h-[600px]"
    >
      <h3 className="text-center font-titr text-lg text-dark-500 lg:text-[28px]">
        {developer.title}
      </h3>
      <h3 className="mt-16 font-titr text-lg text-dark-500 lg:text-[28px]">
        {developer.fullname}
      </h3>
      <p className="mt-10 text-center font-text text-xl font-bold">
        {developer.description}
        <span className="mt-10 mb-3 block">Skills</span>
        <span>
          - Html - {developer.fullname === 'Danial HHK' && 'Css - '} Javascript
          -{' '}
        </span>
        {developer.skills.map((skill) => (
          <span>{skill} - </span>
        ))}
      </p>
      <p className="mt-8 text-center">
        Github:{' '}
        <a
          href={`https://github.com/${developer.githubname}`}
          className="font-btn font-bold text-blue-600"
          target="_blank"
        >
          @{developer.githubname}
        </a>
      </p>
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
        <img
          src="/icons/html.png"
          className="h-8 w-8 md:h-14 md:w-14 lg:h-14 lg:w-14"
          alt=""
        />
        {developer.fullname === 'Danial HHK' && (
          <img
            src="/icons/css.png"
            className="h-8 w-8 md:h-14 md:w-14 lg:h-14 lg:w-14"
            alt=""
          />
        )}
        <img
          src="/icons/js.png"
          className="h-8 w-8 md:h-14 md:w-14 lg:h-14 lg:w-14"
          alt=""
        />
        {developer.fullname === 'Danial HHK' ? (
          <>
            <a target="_blank" href="https://tailwindcss.com/">
              <img
                src="/icons/tailwind.png"
                className="h-8 w-8 md:h-14 md:w-14 lg:h-14 lg:w-14"
                alt=""
              />
            </a>
            <a target="_blank" href="https://getbootstrap.com/">
              <img
                src="/icons/bootstrap.png"
                className="h-8 w-8 md:h-14 md:w-14 lg:h-14 lg:w-14"
                alt=""
              />
            </a>
            <a target="_blank" href="https://git-scm.com/">
              <img
                src="/icons/git.png"
                className="h-8 w-8 md:h-14 md:w-14 lg:h-14 lg:w-14"
                alt=""
              />
            </a>
            <a target="_blank" href="https://react.dev/">
              <img
                src="/icons/react.png"
                className="h-8 w-8 md:h-14 md:w-14 lg:h-14 lg:w-14"
                alt=""
              />
            </a>
            <a target="_blank" href="https://www.figma.com/">
              <img
                src="/icons/figma.png"
                className="h-8 w-8 md:h-14 md:w-14 lg:h-14 lg:w-14"
                alt=""
              />
            </a>
          </>
        ) : (
          <>
            <a target="_blank" href="https://nodejs.org/en">
              <img
                src="/icons/node2.png"
                className="h-8 w-8 md:h-14 md:w-14 lg:h-14 lg:w-14"
                alt=""
              />
            </a>
            <a target="_blank" href="https://expressjs.com/">
              <img
                src="/icons/express.png"
                className="h-8 w-8 md:h-14 md:w-14 lg:h-14 lg:w-14"
                alt=""
              />
            </a>
            <a target="_blank" href="https://mongodb.com/">
              <img
                src="/icons/mongo.png"
                className="h-8 w-8 md:h-14 md:w-14 lg:h-14 lg:w-14"
                alt=""
              />
            </a>
            <a target="_blank" href="https://git-scm.com/">
              <img
                src="/icons/git.png"
                className="h-8 w-8 md:h-14 md:w-14 lg:h-14 lg:w-14"
                alt=""
              />
            </a>
          </>
        )}
      </div>
    </motion.div>
  )
}

export default AboutCard
