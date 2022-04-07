import "./sidebar.css";
import { ListGroup, Button } from "react-bootstrap";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="p-2">
        <ListGroup>
          <ListGroup.Item variant="light">
            <RssFeed className="sidebarIcon" />
            <span >Feed</span> 
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            <Chat className="sidebarIcon" />
            <span >Chats</span> 
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span >Videos</span> 
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            <Group className="sidebarIcon" />
            <span >Groups</span> 
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            <Bookmark className="sidebarIcon" />
            <span >Bookmark</span> 
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            <HelpOutline className="sidebarIcon" />
            <span >Questions</span> 
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            <WorkOutline className="sidebarIcon" />
            <span >Jobs</span> 
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            <Event className="sidebarIcon" />
            <span >Events</span> 
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            <School className="sidebarIcon" />
            <span >Courses</span> 
          </ListGroup.Item>
        </ListGroup>
        {/* show more button */}
        <Button className="mt-2" variant="success">Show More</Button>

        <ListGroup className="mt-2">
          <ListGroup.Item>
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}