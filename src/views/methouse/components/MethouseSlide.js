import React from 'react'

export const BROWN = '#32100C'
export const GREEN = '#0D322E'
export const GREY = '#2F2C2D'

const MethouseSlide = ({
  isFirst = false,
  tag,
  title,
  text,
  img,
  bgColor = BROWN
}) => {
  const [sectionClassName] = React.useState(
    isFirst ? "first-sticky-ctn section-ctn sticyk-ctn" : "section-ctn sticyk-ctn"
  )
  return (
    <section
      key={title}
      className={sectionClassName}
      style={{backgroundColor: bgColor}}>
      <div className="methouse-slide-text-ctn">
        <div className="content-ctn">
          <div className="text-ctn">
            <h4>{tag}</h4>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className="methouse-img-ctn">
        {img}
      </div>
    </section>
  )
}

export default MethouseSlide
