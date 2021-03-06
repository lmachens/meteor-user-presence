Package.describe({
	name: 'lmachens:user-presence',
	summary: 'Track user status',
	version: '1.3.0',
	git: 'https://github.com/lmachens/meteor-user-presence'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.2.1');

	api.use('ecmascript@0.8.0');

	api.addFiles('common/common.js');
	api.addFiles('server/server.js', ['server']);
	api.addFiles('server/monitor.js', ['server']);
	api.addFiles('client/client.js', ['client']);

	api.export(['UserPresence'], ['server', 'client']);
	api.export(['UserPresenceMonitor'], ['server']);
	api.export(['UsersSessions'], ['server', 'client']);
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('konecty:user-presence');
	api.addFiles('konecty_user-presence-tests.js');
});

Npm.depends({
	colors: '1.1.2',
	'lodash.throttle': '4.1.1' 
});