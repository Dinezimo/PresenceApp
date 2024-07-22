// src/mirage.js
import { createServer, Model, Factory, RestSerializer, Response} from 'miragejs';

export function my_virtual_server({ environment = 'development' } = {}) {
  return createServer({
    environment,

    serializers: {
      application: RestSerializer,
    },

    models: {
      institution: Model,
      group: Model,
      user: Model,
      schedule: Model,
      session: Model,
      presence: Model,
      notification: Model,
      report: Model,
      profile: Model,
      camera: Model,
      room: Model,
    },

    factories: {
      institution: Factory.extend({
        name(i) {
          return `Institution ${i}`;
        },
      }),
      group: Factory.extend({
        name(i) {
          return `Group ${i}`;
        },
      }),
      user: Factory.extend({
        name(i) {
          return `User ${i}`;
        },
        email(i) {
          return `user${i}@example.com`;
        },
        password: 'password',
      }),
      schedule: Factory.extend({
        name(i) {
          return `Schedule ${i}`;
        },
      }),
      session: Factory.extend({
        name(i) {
          return `Session ${i}`;
        },
      }),
      presence: Factory.extend({
        studentName(i) {
          return `Student ${i}`;
        },
      }),
      notification: Factory.extend({
        message(i) {
          return `Notification ${i}`;
        },
      }),
      report: Factory.extend({
        title(i) {
          return `Report ${i}`;
        },
      }),
      profile: Factory.extend({
        bio(i) {
          return `Profile Bio ${i}`;
        },
      }),
      camera: Factory.extend({
        location(i) {
          return `Location ${i}`;
        },
      }),
      room: Factory.extend({
        name(i) {
          return `Room ${i}`;
        },
      }),
    },

    seeds(server) {
      server.createList('institution', 5);
      server.createList('group', 5);
      server.createList('user', 10);
      server.createList('schedule', 5);
      server.createList('session', 5);
      server.createList('presence', 5);
      server.createList('notification', 5);
      server.createList('report', 5);
      server.createList('profile', 5);
      server.createList('camera', 5);
      server.createList('room', 5);
    },

    routes() {
      this.namespace = 'api';

      this.get('/institutions', (schema) => {
        return schema.institutions.all();
      });

      this.get('/institutions/:id', (schema, request) => {
        let id = request.params.id;
        return schema.institutions.find(id);
      });

      this.post('/institutions', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.institutions.create(attrs);
      });

      this.put('/institutions/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let institution = schema.institutions.find(id);
        return institution.update(attrs);
      });

      this.delete('/institutions/:id', (schema, request) => {
        let id = request.params.id;
        return schema.institutions.find(id).destroy();
      });

      this.get('/groups', (schema) => {
        return schema.groups.all();
      });

      this.get('/groups/:id', (schema, request) => {
        let id = request.params.id;
        return schema.groups.find(id);
      });

      this.post('/groups', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.groups.create(attrs);
      });

      this.put('/groups/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let group = schema.groups.find(id);
        return group.update(attrs);
      });

      this.delete('/groups/:id', (schema, request) => {
        let id = request.params.id;
        return schema.groups.find(id).destroy();
      });

      this.get('/users', (schema) => {
        return schema.users.all();
      });

      this.get('/user', (schema, request) => {
        const token = request.requestHeaders['Authorization'];
        const user = schema.users.findBy({token});
        if (user) {
            return user;
        } else{
            return Response(401, {}, 'Invalid token');
        }
      });

      this.get('/users/:id', (schema, request) => {
        let id = request.params.id;
        return schema.users.find(id);
      });

      this.post('/users', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.users.create(attrs);
      });

      this.put('/users/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let user = schema.users.find(id);
        return user.update(attrs);
      });

      this.delete('/users/:id', (schema, request) => {
        let id = request.params.id;
        return schema.users.find(id).destroy();
      });

      this.get('/schedules', (schema) => {
        return schema.schedules.all();
      });

      this.get('/schedules/:id', (schema, request) => {
        let id = request.params.id;
        return schema.schedules.find(id);
      });

      this.post('/schedules', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.schedules.create(attrs);
      });

      this.put('/schedules/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let schedule = schema.schedules.find(id);
        return schedule.update(attrs);
      });

      this.delete('/schedules/:id', (schema, request) => {
        let id = request.params.id;
        return schema.schedules.find(id).destroy();
      });

      this.get('/sessions', (schema) => {
        return schema.sessions.all();
      });

      this.get('/sessions/:id', (schema, request) => {
        let id = request.params.id;
        return schema.sessions.find(id);
      });

      this.post('/sessions', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.sessions.create(attrs);
      });

      this.put('/sessions/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let session = schema.sessions.find(id);
        return session.update(attrs);
      });

      this.delete('/sessions/:id', (schema, request) => {
        let id = request.params.id;
        return schema.sessions.find(id).destroy();
      });

      this.get('/presences', (schema) => {
        return schema.presences.all();
      });

      this.post('/beacons/process/student', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.presences.create(attrs);
      });

      this.get('/notifications', (schema) => {
        return schema.notifications.all();
      });

      this.get('/notifications/:id', (schema, request) => {
        let id = request.params.id;
        return schema.notifications.find(id);
      });

      this.post('/notifications', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.notifications.create(attrs);
      });

      this.put('/notifications/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let notification = schema.notifications.find(id);
        return notification.update(attrs);
      });

      this.delete('/notifications/:id', (schema, request) => {
        let id = request.params.id;
        return schema.notifications.find(id).destroy();
      });

      this.get('/reports', (schema) => {
        return schema.reports.all();
      });

      this.get('/reports/:id', (schema, request) => {
        let id = request.params.id;
        return schema.reports.find(id);
      });

      this.post('/reports', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.reports.create(attrs);
      });

      this.put('/reports/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let report = schema.reports.find(id);
        return report.update(attrs);
      });

      this.delete('/reports/:id', (schema, request) => {
        let id = request.params.id;
        return schema.reports.find(id).destroy();
      });

      this.get('/profiles', (schema) => {
        return schema.profiles.all();
      });

      this.get('/profiles/:id', (schema, request) => {
        let id = request.params.id;
        return schema.profiles.find(id);
      });

      this.post('/profiles', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.profiles.create(attrs);
      });

      this.put('/profiles/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let profile = schema.profiles.find(id);
        return profile.update(attrs);
      });

      this.delete('/profiles/:id', (schema, request) => {
        let id = request.params.id;
        return schema.profiles.find(id).destroy();
      });

      this.get('/cameras', (schema) => {
        return schema.cameras.all();
      });

      this.get('/cameras/:id', (schema, request) => {
        let id = request.params.id;
        return schema.cameras.find(id);
      });

      this.post('/cameras', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.cameras.create(attrs);
      });

      this.put('/cameras/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let camera = schema.cameras.find(id);
        return camera.update(attrs);
      });

      this.delete('/cameras/:id', (schema, request) => {
        let id = request.params.id;
        return schema.cameras.find(id).destroy();
      });

      this.get('/beacons/scan', (schema) => {
        return schema.presences.all();
      });

      this.get('/rooms', (schema) => {
        return schema.rooms.all();
      });

      this.get('/rooms/:id', (schema, request) => {
        let id = request.params.id;
        return schema.rooms.find(id);
      });

      this.post('/rooms', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.rooms.create(attrs);
      });

      this.put('/rooms/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        let room = schema.rooms.find(id);
        return room.update(attrs);
      });

      this.delete('/rooms/:id', (schema, request) => {
        let id = request.params.id;
        return schema.rooms.find(id).destroy();
      });
    },
  });
}
