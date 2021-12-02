// mongosh --port 27018
rs.initiate();

rs.status();

// Adding the secondary node
rs.add("localhost:27019");

/* Adding the data on the primary node
	show dbs;
	use ttn;
*/
db.user.insertOne({ name: "Nikunj", competency: "MEAN" });
db.getMongo().setReadPref("secondary");

// mongosh --port 27019
rs.secondaryOk();

/** Can see the replication of data on secondary
 *  show dbs
 * use ttn;
 * db.user.find().pretty()
 */

rs.add("localhost:27020");
rs.add("localhost:27021");

rs.addArb("localhost:27022");

// mongosh --port 27022
// show dbs -> no data on arbiter

rs.status();
