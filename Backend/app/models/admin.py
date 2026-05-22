# app/models/admin.py

from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    DateTime,
    ForeignKey,
    Text,
    JSON,
    Float
)
from sqlalchemy.orm import relationship
from datetime import datetime

from app.core.database import Base


# ======================================================
# ADMIN MODEL
# ======================================================

class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)

    # BASIC INFO
    full_name = Column(String(150), nullable=False)
    username = Column(String(100), unique=True, nullable=False, index=True)
    email = Column(String(150), unique=True, nullable=False, index=True)
    phone = Column(String(20), nullable=True)

    # SECURITY
    hashed_password = Column(String(255), nullable=False)
    role = Column(String(50), default="admin")
    is_super_admin = Column(Boolean, default=False)

    # ACCOUNT STATUS
    is_active = Column(Boolean, default=True)
    is_verified = Column(Boolean, default=False)
    is_deleted = Column(Boolean, default=False)

    # LOGIN TRACKING
    last_login = Column(DateTime, nullable=True)
    last_login_ip = Column(String(100), nullable=True)
    login_attempts = Column(Integer, default=0)

    # PROFILE
    profile_image = Column(String(255), nullable=True)
    bio = Column(Text, nullable=True)

    # PERMISSIONS
    permissions = Column(JSON, nullable=True)

    # TIMESTAMPS
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )

    # RELATIONSHIPS
    activities = relationship(
        "AdminActivity",
        back_populates="admin",
        cascade="all, delete"
    )

    notifications = relationship(
        "AdminNotification",
        back_populates="admin",
        cascade="all, delete"
    )

    reports = relationship(
        "AdminReport",
        back_populates="admin",
        cascade="all, delete"
    )


# ======================================================
# ADMIN ACTIVITY LOG
# ======================================================

class AdminActivity(Base):
    __tablename__ = "admin_activities"

    id = Column(Integer, primary_key=True, index=True)

    admin_id = Column(
        Integer,
        ForeignKey("admins.id", ondelete="CASCADE")
    )

    action = Column(String(255), nullable=False)
    module = Column(String(100), nullable=False)

    description = Column(Text, nullable=True)

    ip_address = Column(String(100), nullable=True)
    device_info = Column(String(255), nullable=True)

    status = Column(String(50), default="success")

    created_at = Column(DateTime, default=datetime.utcnow)

    admin = relationship(
        "Admin",
        back_populates="activities"
    )


# ======================================================
# ADMIN NOTIFICATIONS
# ======================================================

class AdminNotification(Base):
    __tablename__ = "admin_notifications"

    id = Column(Integer, primary_key=True, index=True)

    admin_id = Column(
        Integer,
        ForeignKey("admins.id", ondelete="CASCADE")
    )

    title = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)

    notification_type = Column(String(50), default="system")

    is_read = Column(Boolean, default=False)

    created_at = Column(DateTime, default=datetime.utcnow)

    admin = relationship(
        "Admin",
        back_populates="notifications"
    )


# ======================================================
# ADMIN REPORTS
# ======================================================

class AdminReport(Base):
    __tablename__ = "admin_reports"

    id = Column(Integer, primary_key=True, index=True)

    admin_id = Column(
        Integer,
        ForeignKey("admins.id", ondelete="SET NULL")
    )

    report_name = Column(String(255), nullable=False)

    report_type = Column(String(100), nullable=False)

    report_file = Column(String(255), nullable=True)

    total_records = Column(Integer, default=0)

    accuracy_score = Column(Float, nullable=True)

    report_metadata = Column(JSON, nullable=True)

    generated_at = Column(DateTime, default=datetime.utcnow)

    admin = relationship(
        "Admin",
        back_populates="reports"
    )


# ======================================================
# SYSTEM SETTINGS
# ======================================================

class SystemSettings(Base):
    __tablename__ = "system_settings"

    id = Column(Integer, primary_key=True, index=True)

    app_name = Column(String(255), default="AI Demand Forecasting")

    maintenance_mode = Column(Boolean, default=False)

    allow_user_registration = Column(Boolean, default=True)

    email_notifications = Column(Boolean, default=True)

    forecast_model_default = Column(String(100), default="ARIMA")

    max_upload_size_mb = Column(Integer, default=50)

    supported_file_formats = Column(
        JSON,
        default=["csv", "xlsx"]
    )

    backup_frequency = Column(String(50), default="daily")

    api_rate_limit = Column(Integer, default=100)

    analytics_enabled = Column(Boolean, default=True)

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )


# ======================================================
# SYSTEM ANALYTICS
# ======================================================

class SystemAnalytics(Base):
    __tablename__ = "system_analytics"

    id = Column(Integer, primary_key=True, index=True)

    total_users = Column(Integer, default=0)

    total_admins = Column(Integer, default=0)

    total_datasets = Column(Integer, default=0)

    total_forecasts = Column(Integer, default=0)

    successful_forecasts = Column(Integer, default=0)

    failed_forecasts = Column(Integer, default=0)

    average_accuracy = Column(Float, default=0.0)

    active_users_today = Column(Integer, default=0)

    server_cpu_usage = Column(Float, default=0.0)

    server_memory_usage = Column(Float, default=0.0)

    created_at = Column(DateTime, default=datetime.utcnow)