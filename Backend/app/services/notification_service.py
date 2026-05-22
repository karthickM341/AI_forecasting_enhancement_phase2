from app.models.notification import Notification
from app.core.database import SessionLocal

def create_notification(user_id, title, message):

    db = SessionLocal()

    notification = Notification(
        user_id=user_id,
        title=title,
        message=message
    )

    db.add(notification)
    db.commit()
    db.refresh(notification)

    return notification