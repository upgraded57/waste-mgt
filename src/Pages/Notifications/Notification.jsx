import "./notifications.css";

export default function Notification({ header, icon }) {
  return (
    <div className="notification">
      <div className="notification-header">
        <div className="notification-header-icon">
          <span className="icon">{icon}</span>
        </div>
        <h3 className="h-100">{header}</h3>
      </div>
      <div className="notification-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          incidunt, maxime officiis molestias dolores velit.
        </p>
        <div className="notification-body-time">30m</div>
      </div>
    </div>
  );
}
