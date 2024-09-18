import { useAppDispatch } from '../../../utils/hooks/hooks'
import { changeLeft, changeRight } from '../../../reducer/toggleSlice'
import { projects } from '../../../utils/links'
const Navigate = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="main-container">
      <svg
        className="navigation-project-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="63"
        height="29"
        viewBox="0 0 63 29"
        fill="none"
      >
        <path
          d="M45.9338 28.5246C51.0446 28.5246 55.0889 26.2121 58.0667 21.587C61.0444 16.962 62.5333 10.6268 62.5333 2.58141H48.9116C48.6159 4.2163 48.0246 5.52852 47.1376 6.51806C46.2506 7.5076 44.9623 8.00237 43.2728 8.00237C41.7522 8.00237 40.105 7.59365 38.331 6.7762C36.557 5.95876 34.6351 5.023 32.5655 3.96892C30.4958 2.91484 28.2044 1.98984 25.6913 1.1939C23.1781 0.397967 20.4221 0 17.4232 0C12.0167 0 7.76123 2.32327 4.65674 6.96981C1.55225 11.6163 0 17.9193 0 25.8786H13.6217C13.9174 24.2868 14.5827 22.9961 15.6175 22.0065C16.6523 21.017 18.0356 20.5222 19.7674 20.5222C21.2035 20.5222 22.7874 20.9202 24.5191 21.7161C26.2509 22.5121 28.1939 23.4478 30.348 24.5234C32.5021 25.599 34.878 26.5348 37.4757 27.3307C40.0733 28.1266 42.8927 28.5246 45.9338 28.5246Z"
          fill="white"
        />
      </svg>
      <h2>Brand naming & guidelines</h2>
      <div className="section-article-button-div">
        <button
          className="fourth-button"
          onClick={() => dispatch(changeLeft(projects))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="40"
            viewBox="0 0 96 40"
            fill="none"
            className="project-btn-one"
          >
            <circle
              cx="20"
              cy="20"
              r="19.5"
              transform="matrix(-1 0 0 1 40 0)"
              stroke="#F94F4F"
            />
            <path
              d="M22.5 15L17.5 20L22.5 25"
              stroke="#F94F4F"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button
          className="fourth-button"
          onClick={() => dispatch(changeRight(projects))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="40"
            viewBox="0 0 96 40"
            fill="none"
            className="project-btn-two"
          >
            <circle cx="76" cy="20" r="19.5" stroke="#F94F4F" />
            <path
              d="M73.5 15L78.5 20L73.5 25"
              stroke="#F94F4F"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navigate
