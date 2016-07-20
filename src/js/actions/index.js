/**
 * Created by ssge on 2016/7/12.
 */
export const clickSidebarButton = (name) => {
  return {
      type: 'CLICK_BUTTON',
      name
  }
};

export const clickCollapseButton = () => {
    return {
        type: 'COLLAPSE_NAVIGATOR'
    }
};