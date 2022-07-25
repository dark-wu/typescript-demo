# 泛型在框架中的应用

## 在React框架中的简单示例
```ts
import React from 'react';

const Content: React.FC<IContent> = (props: IContent) => (
    <div>
        <h2>泛型在框架中的应用</h2>
    </div>
)
export default Content;

```