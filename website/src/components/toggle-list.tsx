import React from "react"
import styled, { css } from "styled-components"
import { Margin } from "styled-components-spacing"

export interface ToggleListItem {
  key: string
  content: Array<{ key: string; node: React.ReactNode }>
  children: ToggleListItem[]
}

const ListItemBullet = styled.div<{ rotate?: string }>`
  width: 10px;
  cursor: pointer;
  transition: transform 0.15s linear;
  ${props =>
    props.rotate
      ? css`
          transform: rotate(${props.rotate});
        `
      : null}
`

const ListItemContent = styled.div`
  display: flex;
`

interface State {
  itemsExpanded: { [key: string]: boolean }
}

export default class ToggleList extends React.Component<
  {
    children: ToggleListItem[]
  },
  State
> {
  state: State = {
    itemsExpanded: {},
  }

  toggle(key: string) {
    this.setState({
      itemsExpanded: {
        ...this.state.itemsExpanded,
        [key]: !this.state.itemsExpanded[key],
      },
    })
  }

  renderItem(item: ToggleListItem) {
    const hasChildren = !!item.children.length
    const expanded = !!this.state.itemsExpanded[item.key]
    return (
      <div key={item.key}>
        <ListItemContent>
          <Margin right="medium">
            {!hasChildren && <ListItemBullet>&#8226;</ListItemBullet>}
            {hasChildren && (
              <ListItemBullet
                onClick={() => this.toggle(item.key)}
                rotate={expanded ? "90deg" : undefined}
              >
                &#8227;
              </ListItemBullet>
            )}
          </Margin>
          <div>{item.content.map(content => content.node)}</div>
        </ListItemContent>
        {expanded && (
          <Margin left="largest">
            {item.children.map(child => this.renderItem(child))}
          </Margin>
        )}
      </div>
    )
  }

  render() {
    return (
      <Margin bottom="medium">
        {this.props.children.map(child => this.renderItem(child))}
      </Margin>
    )
  }
}
