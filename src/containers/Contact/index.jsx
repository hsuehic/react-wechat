/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 */

import React from 'react';
import Contact from '../../components/Contact';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {

    const items = { 
      s_a: 
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'bob', text: 'Bob' },
        r_3: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'fly', text: 'Fly' },
        r_4: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'fly', text: 'Fly' },
        name: 'A' 
      },
      s_b:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic', text: 'Hsuehic' },
        name: 'B'
      },
      s_c:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard1', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic2', text: 'Hsuehic' },
        r_3: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard3', text: 'Richard' },
        r_4: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic4', text: 'Hsuehic' },
        name: 'C'
      },
      s_d:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic', text: 'Hsuehic' },
        name: 'D'
      },
      s_e:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard1', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic2', text: 'Hsuehic' },
        r_3: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard3', text: 'Richard' },
        r_4: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic4', text: 'Hsuehic' },
        name: 'E'
      },
      s_f:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic', text: 'Hsuehic' },
        name: 'F'
      },
      s_g:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard1', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic2', text: 'Hsuehic' },
        r_3: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard3', text: 'Richard' },
        r_4: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic4', text: 'Hsuehic' },
        name: 'G'
      },
      s_h:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic', text: 'Hsuehic' },
        name: 'H'
      },
      s_i:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard1', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic2', text: 'Hsuehic' },
        r_3: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard3', text: 'Richard' },
        r_4: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic4', text: 'Hsuehic' },
        name: 'I'
      },
      s_j:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic', text: 'Hsuehic' },
        name: 'J'
      },
      s_k:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard1', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic2', text: 'Hsuehic' },
        r_3: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard3', text: 'Richard' },
        r_4: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic4', text: 'Hsuehic' },
        name: 'K'
      },
      s_l:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic', text: 'Hsuehic' },
        name: 'L'
      },
      s_m:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard1', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic2', text: 'Hsuehic' },
        r_3: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard3', text: 'Richard' },
        r_4: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic4', text: 'Hsuehic' },
        name: 'm'
      },
      s_n:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic', text: 'Hsuehic' },
        name: 'N'
      },
      s_o:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard1', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic2', text: 'Hsuehic' },
        r_3: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard3', text: 'Richard' },
        r_4: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic4', text: 'Hsuehic' },
        name: 'O'
      },
      s_p:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic', text: 'Hsuehic' },
        name: 'p'
      },
      s_q:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard1', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic2', text: 'Hsuehic' },
        r_3: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard3', text: 'Richard' },
        r_4: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic4', text: 'Hsuehic' },
        name: 'Q'
      },
      s_r:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic', text: 'Hsuehic' },
        name: 'R'
      },
      s_s:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard1', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic2', text: 'Hsuehic' },
        r_3: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard3', text: 'Richard' },
        r_4: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic4', text: 'Hsuehic' },
        name: 'S'
      },
      s_t:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic', text: 'Hsuehic' },
        name: 'T'
      },
      s_u:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard1', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic2', text: 'Hsuehic' },
        r_3: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard3', text: 'Richard' },
        r_4: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic4', text: 'Hsuehic' },
        name: 'U'
      },
      s_v:
      { 
        r_1: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'richard', text: 'Richard' },
        r_2: { thumb: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58', id: 'hsuehic', text: 'Hsuehic' },
        name: 'V'
      }
    };

    const sectionIDs = []
    const rowIDs = []
    let even = false
    'abcdefghijklmnopqrstu'.split('').forEach(c => {
      sectionIDs.push(`s_${c}`);
      if (even) {
        rowIDs.push(['r_1', 'r_2']);
      } else {
        rowIDs.push(['r_1', 'r_2', 'r_3', 'r_4']);
      }
      even = !even;
    });
    const props = { items, sectionIDs, rowIDs}

    return <Contact {...this.props} {...props} />;
  }
}
