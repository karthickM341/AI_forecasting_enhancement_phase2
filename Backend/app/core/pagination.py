def paginate(query, page: int = 1, limit: int = 10):

    start = (page - 1) * limit

    return query.offset(start).limit(limit).all()