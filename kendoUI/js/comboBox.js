
$(document).ready(function () {
 // create ComboBox from input HTML element
                    $("#fabric").kendoComboBox({
                        dataTextField: "parentName",
                        dataValueField: "parentId",
                        dataSource: [
                            { parentName: "Parent1", parentId: 1 },
                            { parentName: "Parent2", parentId: 2 },
                            { parentName: "Parent3", parentId: 3 },
                            { parentName: "Parent4", parentId: 4 }
                        ],
                        filter: "contains",
                        suggest: true,
                        index: 0,
                        select: function(e) {
                            console.log(e);
                        }
                    });

                    $("#child").kendoComboBox({
                        cascadeForm:'parent',
                        dataTextField: "childName",
                        dataValueField: "childId",
                        dataSource: [
                            { childName: "Child1", childId:1, parentId: 1 },
                            { childName: "Child2", childId:2, parentId: 2 },
                            { childName: "Child3", childId:3, parentId: 3 },
                            { childName: "Child4", childId:4, parentId: 4 }
                        ]
                    });

                    var fabric = $("#fabric").data("kendoComboBox");
					var select = $("#size").data("kendoComboBox");


					$("#get").click(function() {
					    alert('Thank you! Your Choice is:\n\nFabric ID: ' + fabric.value() + ' and Size: ' + select.value());
                    });
                });