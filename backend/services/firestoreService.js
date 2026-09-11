const { db, docToObject, snapshotToArray } = require("../config/firebaseAdmin");

const create = async (collection, data, id) => {
  const payload = {
    ...data,

    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString(),
  };

  if (id) {
    await db.collection(collection).doc(id).set(payload);

    return {
      id,
      ...payload,
    };
  }

  const ref = await db.collection(collection).add(payload);

  return {
    id: ref.id,

    ...payload,
  };
};

const findById = async (collection, id) => {
  const snapshot = await db.collection(collection).doc(id).get();

  return docToObject(snapshot);
};

const findByField = async (collection, field, value) => {
  const snapshot = await db.collection(collection).where(field, "==", value).get();

  return snapshotToArray(snapshot);
};

const findAll = async (collection, options = {}) => {
  let query = db.collection(collection);

  const {
    where = [],

    orderBy,

    limit,

    offset = 0,
  } = options;

  where.forEach(([field, op, value]) => {
    query = query.where(field, op, value);
  });

  if (orderBy) {
    query = query.orderBy(orderBy.field, orderBy.direction || "desc");
  }

  if (limit) {
    query = query.limit(Number(limit) + Number(offset));
  }

  const rows = snapshotToArray(await query.get());

  return offset ? rows.slice(Number(offset)) : rows;
};

const update = async (collection, id, data) => {
  await db
    .collection(collection)
    .doc(id)
    .set(
      {
        ...data,

        updatedAt: new Date().toISOString(),
      },
      {
        merge: true,
      },
    );

  return findById(collection, id);
};

const remove = async (collection, id) => {
  await db.collection(collection).doc(id).delete();

  return {
    id,

    deleted: true,
  };
};

const count = async (collection) => {
  const snapshot = await db.collection(collection).count().get();

  return snapshot.data().count;
};

module.exports = {
  create,

  findById,

  findByField,

  findAll,

  update,

  remove,

  count,
};
