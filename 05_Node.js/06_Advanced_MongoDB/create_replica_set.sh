mkdir -p mongo/rs1 mongo/rs2 mongo/rs3

sudo mongod --replSet myReplicaSet --port 27018 --dbpath mongo/rs1 --logpath 'mongo/rs1.log' --logappend --fork  &


sudo mongod --replSet myReplicaSet --port 27019 --dbpath mongo/rs2 --logpath 'mongo/rs2.log' --logappend --fork  &


sudo mongod --replSet myReplicaSet --port 27020 --dbpath mongo/rs3 --logpath 'mongo/rs3.log' --logappend --fork  &


sudo mongod --replSet myReplicaSet --port 27021 --dbpath mongo/rs4 --logpath 'mongo/rs4.log' --logappend --fork  &

