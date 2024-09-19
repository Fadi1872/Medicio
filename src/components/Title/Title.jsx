import './Title.css'

const Title = ({title, subTitle, alignStart, small}) => {
  return (
    <div className={alignStart? "" : "text-center"}>
        <h2 className={small? "fs-3": ""}>{title}</h2>
        <div className={`title_line bg-blue my-3 ${alignStart? "": "mx-auto"}`}></div>
        <p>{subTitle}</p>
    </div>
  )
}

export default Title