/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 */

import React from 'react';

export default ({ type, size = 'md', className = '' }) => {
  return <i className={`weicon we-icon-${type} we-icon-${size} ${className}`} />;
}