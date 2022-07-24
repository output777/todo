import React from 'react'
import './style.css';

const Form = ({handleSubmit, value, setValue, desc, setDesc}) => {
  console.log('Form rendering...')

  const handleTitle = (e) => {
    setValue(e.target.value);
  }

  const handleDesc = (e) => {
    setDesc(e.target.value);
  }

  return (
    <form className='formContainer' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="해야 할 일을 입력하세요."
          value={value}
          onChange={handleTitle}
        />
        <label htmlFor="desc">내용</label>
        <input
          id="desc"
          type="text"
          name="desc"
          placeholder="구체적으로 적어보세요"
          value={desc}
          onChange={handleDesc}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>추가하기</button>
      </div>
    </form>
  )
}

export default Form