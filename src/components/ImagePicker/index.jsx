/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * 
 * @Authors: 兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-17 15:46:09
 */

import React from 'react'
import { Toast } from 'antd-mobile'
import ImageCamera from '../../images/a81.png'

import './index.less'

class Component extends React.Component  {
  constructor(props, ctx) {
    super(props, ctx);
    this.state = {
      imgSource: ImageCamera
    }
    this.onSelectImage = this.onSelectImage.bind(this)
    this.onImageChange = this.onImageChange.bind(this)
  }

  onSelectImage() {
    const { fileInput } = this
    if (fileInput) {
      fileInput.click()
    }
  }

  onImageChange(evnt) {
    const { fileInput } = this
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0]
      const reader = new FileReader()
      const { maxSize, onChange } = this.props
      if (file.size > maxSize) {
        Toast.fail(`请选择小于${Math.floor(maxSize / 1024)}KB的图片`)
        return
      }
      reader.addEventListener('load', (e) => {
        if (typeof onChange === 'function') {
          onChange(reader.result)
        }
        this.setState({
          imgSource: reader.result
        })        
      })
      reader.readAsDataURL(file)
    }
  }

  render() {
    const { className, style } = this.props
    const { imgSource } = this.state
    return <div className={className} styleName="container" style={style}>
      <img alt="" src={imgSource} onClick={this.onSelectImage} />
      <input
        onChange={this.onImageChange}
        ref={(node) => { if (node) { this.fileInput = node } }}
        type="file"
        accept="image/*'"
        style={{ visibility: false }}
      />
    </div>
  }
}

export default Component
