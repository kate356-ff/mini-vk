import { Group, Panel, PanelHeader, PanelHeaderBack, Placeholder } from '@vkontakte/vkui';
import { Icon28RadiowavesLeftAndRightCircleFillRed } from '@vkontakte/icons'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';

export const NewPanel = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        Новая панель
      </PanelHeader>


        <Group>
            <Icon28RadiowavesLeftAndRightCircleFillRed />
        </Group>

    </Panel>
  );
};

NewPanel.propTypes = {
  id: PropTypes.string.isRequired,
};
