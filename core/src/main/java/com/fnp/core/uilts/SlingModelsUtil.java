package com.fnp.core.uilts;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.SlingModelFilter;
import java.util.LinkedHashMap;
import java.util.Map;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.factory.ModelFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Utilities for sling models and sling models exporter
 */
public final class SlingModelsUtil {

  private SlingModelsUtil() {
  }

  private static final Logger LOGGER = LoggerFactory.getLogger(SlingModelsUtil.class);

  /**
   * Generate a map of the child resources of the resource available in the given request. The child
   * resources and their properties will be filtered out using the default {@link SlingModelFilter}
   * configuration.
   * <p>
   * Note: All components must have {@link ComponentExporter} adapter.
   *
   * @param slingRequest {@link SlingHttpServletRequest}
   * @param slingModelFilter {@link SlingModelFilter}
   * @param modelFactory {@link ModelFactory}
   * @return Map of filtered child components with node name as key and sling model object of the
   * child resource as value.
   */
  public static Map<String, ComponentExporter> getChildModels(
      SlingHttpServletRequest slingRequest, SlingModelFilter slingModelFilter,
      ModelFactory modelFactory) {

    Map<String, ComponentExporter> itemWrappers = new LinkedHashMap<>();

    Resource resourceFromRequest = slingRequest.getResource();

    Iterable<Resource> filteredResources = slingModelFilter
        .filterChildResources(resourceFromRequest.getChildren());

    filteredResources.forEach(childResource ->
        itemWrappers
            .put(childResource.getName(),
                modelFactory
                    .getModelFromWrappedRequest(slingRequest, childResource,
                        ComponentExporter.class))
    );

    LOGGER.debug("Child Sling models exported for resource {} : {}", resourceFromRequest.getPath(),
        itemWrappers.keySet());
    return itemWrappers;
  }

}